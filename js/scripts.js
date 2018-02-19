//Declaracion de variables y objetos

var nav = document.getElementById("nav"),
    toggleMenu = document.getElementById("toggle-menu");


//Declaracion de funciones

var showMenu = function() {
    nav.classList.toggle("show-menu");
}

//Asignacion de eventos

toggleMenu.addEventListener('click', showMenu);