import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        System.out.println("[<>] comenzando [<>]");

        Map<Character, Integer> diccionario = new HashMap<>();

        diccionario.put('ш',1);
        diccionario.put('ж',2);
        diccionario.put('з',3);
        diccionario.put('к',4);
        diccionario.put('л',5);
        diccionario.put('м',6);
        diccionario.put('н',7);
        diccionario.put('п',8);
        diccionario.put('ф',9);
        diccionario.put('ъ',0);

        String flag = "нж,фн,фф,шън,нф,шшъ,шжз,мф,шъп,фл,пк,шъш,шшм,шшк,шъл,шшл,фл,шъш,шшл,фл,шшн,шшъ,фл,шъм,шшн,шъш,шъз,шшш,фл,пж,шшн,шшл,шшш,шжл";

        System.out.println("Texto claro: ");

        List<Integer> plain = new ArrayList<>();
        int sum;
        int x;
        for (int j=0; j<flag.length();j++){
            if (flag.charAt(j)!=','){
                plain.add(diccionario.get(flag.charAt(j)));
            }else{
                sum = 0;
                x = 1;
                for (int i=plain.size()-1; i>=0; i--){
                    sum+=plain.get(i)*x;
                    x*=10;
                }
                System.out.print(Character.toString(sum));
                plain.clear();
            }
        }
        sum = 0;
        x = 1;
        for (int i=plain.size()-1; i>=0; i--){
            sum+=plain.get(i)*x;
            x*=10;
        }
        System.out.print(Character.toString(sum));
    }
}