var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");

btn1.onclick = function() {
  document.querySelector("p").style.color = "rgba(181, 207, 242, 100)";
}

btn2.onclick = function() {
  document.querySelector("p").style.color = "black";
}