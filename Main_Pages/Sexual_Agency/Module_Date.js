//Get day of the week (0-6)


var d = new Date();
var crush = ["Jonas the Delivery Guy",
   			"Jordan Cagan",
            "Bruce the Goose",
            "Josh",
            "An Entire Zombie Basketball Team",
            "Jeff",
            "Jimmy Junior"];

var photos = [
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bobs-Burgers-Jonas-the-delivery-boy.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bobs-Burgers-Jordan-Cagan-kisses-Tina.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bobs-Burgers-Bruce-the-Goose-and-Tina.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bobs-Burgers-Josh-and-Tina.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/TINA-BOBS-BURGERS-.jpeg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/bobs-burgers-halloween-tina-and-the-real-ghost.jpg',
  'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/Bobs-Burgers-Tina-and-Jimmy-Junior.jpg'
];

document.getElementById("crush").innerHTML = crush[d.getDay()];
document.getElementById("image").src = photos[d.getDay()];

// 0 = Jonas the Delivery Guy
// 1 = Jordan Cagan
// 2 = Bruce the Goose
// 3 = Josh
// 4 = An Entire Zombie Basketball Team
// 5 = Jeff
// 6 = Jimmy Junior

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
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