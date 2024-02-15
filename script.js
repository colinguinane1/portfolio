var navbar = document.getElementById("navbar")
var navbarText = document.getElementsByClassName("navbar_text")

window.addEventListener("scroll", function Scroll(){
    navbar.classList.toggle("scrolled", window.scrollY > 0);
    navbarText.classList.toggle("scrolledA", window.scrollY > 0);
})

