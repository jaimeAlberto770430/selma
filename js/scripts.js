//$('p').hide();
let i = 0;
let slideOn;
mostrarMenu = () => {
        menu.classList.toggle("show")

    }
    /*
    let menu = document.getElementById("menu");
    let btnMenu = document.getElementById("btnMenu");
    */

let menu = document.querySelector(".frm12");
let btnMenu = document.querySelector(".frm13");
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

btnMenu.onclick = mostrarMenu;

showSlides = () => {
    slides.forEach((e, i, arrayOb) => {
        e.classList.add("hide");
    })
    console.log(slides[slideIndex]);

    slides[slideIndex].classList.replace("hide", "show");
    (slideIndex < slides.length - 1) ? slideIndex++ : slideIndex = 0
    setTimeout(showSlides, 5000);
}

showSlides();