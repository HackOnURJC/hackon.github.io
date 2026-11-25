$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Solo actuar si el enlace apunta a un ancla de ESTA página, el destino existe
    // y no lo gestiona ya agency.js (js-scroll-trigger)
    if (this.hash !== "" &&
        this.pathname.replace(/^\//, '') === location.pathname.replace(/^\//, '') &&
        $(this.hash).length &&
        !$(this).hasClass('js-scroll-trigger')) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 180
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});

// Get the modal
var modal = document.getElementById("nuevaUbicacion");

// Get the button that opens the modal
var btn = document.getElementById("boton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];

if (modal && btn) {
  btn.onclick = function(){
    modal.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if (modal && span) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
if (modal) {
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

var myArray = ['../assets/img/ponentes/Esperanza_Rodriguez.jpeg', '../assets/img/ponentes/Alberto_Gonzalez.jpeg'];

var count = 0;
// Solo rotar la foto si existe #mainPhoto en esta página
if (document.getElementById('mainPhoto')) {
  setInterval(function() {
    //use this below line if you want random images
    //var rand = myArray[Math.floor(Math.random() * myArray.length)];

    if (count >= myArray.length) count = 0; // if it is last image then show the first image.
    // use this below line if you want images in order.
    var rand = myArray[count];
    document.getElementById('mainPhoto').src = rand;
    document.getElementById('mainPhoto').alt = rand; // use 'alt' to display the image name if image is not found
    count++;
  }, 1000);
}