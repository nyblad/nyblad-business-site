// FORM
const signupForm = document.getElementById("signup")

// This function adds class .aftersubmit to my form and scrolls up 100px from top
function toggleAftersubmit() {
  this.classList.toggle("aftersubmit")
  window.scrollTo(0, 150);
}

// When form is submitted function toggleThankyou is called
signupForm.onsubmit = toggleAftersubmit

// ACCORDION
// A function that adds and remove the class "active" on the section you click on.
function toggle() {
  this.classList.toggle("active")
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle
document.getElementById("section5").onclick = toggle

