function myFunction() {
    var x = document.getElementById("main_nav");
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
  }