var navbar = document.getElementById("navbar")

window.addEventListener("scroll", function Scroll(){
    navbar.classList.toggle("scrolled", window.scrollY > 0);
})