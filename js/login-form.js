// Login Form Component Variables
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.querySelector('.login-btn');


/* Login Logic Function */
// 1. Get the Username and Password saved on the Local Storage
const getUserData = localStorage.getItem("AMG User Admin") || [];
const loadUserData = JSON.parse(getUserData);
// Local Storage Inputs
const loadUsername = loadUserData.username;
const loadUserPassword = loadUserData.password;
// Load Login Status Boolean from Local Storage
const loadLoginStatus = loadUserData.isLoggedIn;

// 2. Check if the Both Username and Password from the login input and Local Storage are the same
loginBtn.addEventListener("click", login);

function login(){
    if(usernameInput.value.trim() === loadUsername && passwordInput.value.trim() === loadUserPassword){
        // If the username and password are correct, redirect to the dashboard
        window.location.href = "../forms/confirmation.html";

        // Update "loadLoginStatus" boolean to true
        loadLoginStatus = true;
        localStorage.setItem("AMG User Admin", loadLoginStatus);

    } else{
        validateForm();
    }
}

//Login Validation Form
function validateForm(){
    const userInputs = usernameInput.value.trim() && passwordInput.value.trim();
    let compareLoginInputs = usernameInput.value.trim() === loadUsername && passwordInput.value.trim() === loadUserPassword;

    if(!userInputs || !compareLoginInputs){
        loginBtn.setAttribute("disabled", "");
    } else{
        loginBtn.removeAttribute("disabled");
    }
}

// Calling the "validateForm() automatically according to the user input"
// * User Input in the Array
const userDataInputs = [usernameInput, passwordInput];
userDataInputs.forEach((input) => {
    input.addEventListener("input", validateForm);
});

// Initial calling to validateForm()
validateForm();

// Additional Feature: Show/Hide Password
// Eye Icon button
const showPassIcon = document.getElementById("show-pass-icon");

showPassIcon.addEventListener("click", () => {
    if(showPassIcon.classList.contains("ri-eye-fill")){
        showPassIcon.classList.remove("ri-eye-fill");
        showPassIcon.classList.add("ri-eye-close-fill");

        // Show Password Logic
        passwordInput.type = "text";
    } else if(showPassIcon.classList.contains("ri-eye-close-fill")){
        showPassIcon.classList.remove("ri-eye-close-fill");
        showPassIcon.classList.add("ri-eye-fill");

        // Hide Password Logic
        passwordInput.type = "password";
    }
});