// Mousemove
const cursorCircle = document.querySelector(".cursor-circle");
const cursorPoint = document.querySelector(".cursor-point");

document.addEventListener("mousemove", function(e) {
    cursorCircle.style.cssText = cursorPoint.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;"
})

// Mobile menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}