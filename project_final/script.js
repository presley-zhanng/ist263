function myFunction() {
  var x = document.getElementById("main_nav");
  if (x.className === "nav_bar") {
    x.className += " responsive";
  } else {
    x.className = "nav_bar";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
