var navbar = document.getElementById("navbar")
var navbarText = document.getElementsByClassName("navbar_text")
var learnBTN = document.getElementById("learnBTN");
var aboutText = document.getElementById("about");
var fsANIM = document.getElementById("fsANIM");
var section1 = document.getElementById("SectionContainer")

window.addEventListener("scroll", function Scroll(){
    navbar.classList.toggle("scrolled", window.scrollY > 0);
    fsANIM.classList.toggle("FSbold", window.scrollY > 0);
    aboutText.classList.toggle("visible", window.scrollY > 0);
    learnBTN.classList.toggle("aboutScrolled", window.scrollY > 0);
})

function showAbout(){
        section1.scrollIntoView();
    }
    


