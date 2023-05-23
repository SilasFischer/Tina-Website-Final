// create variable to index the slides - to track
var slideIndex = 0;
// call a function that does something with the slides
showSlides();

function showSlides() {
    // a variable to be used with the for loop
    var i;
    // target the slides in the DOM as slides
    var slides = document.getElementsByClassName("mySlides");
    // loop through the slides showing them one at a time (display)
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    // increment the slides from 0 to the total number of slides (for loop)
    slideIndex++;
    // loop back to the beginning
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}