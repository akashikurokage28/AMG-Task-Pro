// Navigation Bar
const menuBarIcon = document.getElementById("menu-bar");
const menuBar = document.querySelector(".nav-links");
const menuBarCloseIcon = document.getElementById("close-menu");

menuBarIcon.addEventListener("click", () => {
    menuBar.classList.toggle("open-menubar");
});

menuBarCloseIcon.addEventListener("click", () => {
    menuBar.classList.remove("open-menubar");
});