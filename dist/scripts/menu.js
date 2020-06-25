const menuNav = document.querySelector(".menu")
const menuButton = document.querySelector(".menu-button")
const lookButton = document.querySelector(".look-menu")


menuButton.addEventListener('click', function () {

    menuNav.classList.toggle("open")
    lookButton.classList.toggle("white")
});

