
function myFunction() {
  let nav = document.getElementById("nav");
  console.log(nav);

  if (nav.className === "navBar") {
    nav.className += " responsive";
  } else {
    nav.className = "navBar";
  }
}
