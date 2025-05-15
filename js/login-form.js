// Login Form Component Variables
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const loginBtn = document.querySelector('.login-btn');


/* Login Logic Function */
// 1. Get the Username and Password saved on the Local Storage
// Local Storage Key
    let localStorageKey = "AMG User Admin";


// 2. Check if the Both Username and Password from the login input and Local Storage are the same
loginBtn.addEventListener("click", login);

function login(){
    // Load Username and Password from Local Storage
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = JSON.parse(getUserData);
    const loadUsername = loadUserData.username;
    const loadUserPassword = loadUserData.password;

    if(usernameInput.value === loadUsername && passwordInput.value === loadUserPassword){
        // Redirect to Dashboard
        window.location.href = "../forms/dashboard.html";   
        loadUserData.isLoggedIn = "true";
        localStorage.setItem(localStorageKey, JSON.stringify(loadUserData));
    } else{
        validateForm();
    }
}

//Login Validation Form
function validateForm(){
    // Local Storage objects
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = JSON.parse(getUserData);
    const loadUsername = loadUserData.username;
    const loadUserPassword = loadUserData.password;

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