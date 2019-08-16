//$('p').hide();
let i = 0;
alerta = () => {
    menu.classList.toggle("show")

}
let menu = document.getElementById("menu");
let btnMenu = document.getElementById("btnMenu");
btnMenu.onclick = alerta;