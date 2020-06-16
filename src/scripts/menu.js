const menuNav = document.querySelector(".menu")
const menuButton = document.querySelector(".menu-button")

menuButton.addEventListener('click', function () {
    menuNav.classList.toggle("open")
});