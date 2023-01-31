$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
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

btn.onclick = function(){
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var myArray = ['../assets/img/ponentes/Esperanza_Rodriguez.jpeg', '../assets/img/ponentes/Alberto_Gonzalez.jpeg'];

var count = 0;
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