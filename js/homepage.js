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


// Checks if the user is already created an account or not
const getStartedBtn = document.querySelector(".get-started-btn");
const localStorageKey = "AMG User Admin";

getStartedBtn.addEventListener("click", checkUserAcc);

function checkUserAcc(){
    const AMGUserData = localStorage.getItem(localStorageKey);

    if(AMGUserData){
        window.location.href = "../forms/login-form.html";
    }else {
        window.location.href = "../forms/create-acc.html";
    }
}