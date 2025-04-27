// User Data variables
const nameInput = document.getElementById("name-input");
const usernameInput = document.getElementById("username-input");
const passwordInput = document.getElementById("password-input");
const confirmPassInput = document.getElementById("confirm-pass-input");
const backupCodeInput = document.getElementById("backup-pass-input");
// Checkbox variable
const confirmInfoCheckbox = document.getElementById("confirm-info-input");
// Create Account button variable
const createAccBtn = document.getElementById("create-acc-btn");



// Validating Form Inputs By setting attributes to Create Account Button
const userDataInputs = [nameInput, usernameInput, passwordInput, backupCodeInput, confirmInfoCheckbox];

userDataInputs.forEach(input => {
    input.addEventListener("input", validateUserInputs);
});

function validateUserInputs(){
    const isInputFieldsEmpty = nameInput.value.trim() === "" || usernameInput.value.trim() === "" || passwordInput.value.trim() === "" || backupCodeInput.value.trim() === "";

    if(isInputFieldsEmpty || !confirmInfoCheckbox.checked || passwordInput.value !== confirmPassInput.value){
        createAccBtn.setAttribute("disabled", "");
    } else{
        createAccBtn.removeAttribute("disabled");
    }

}

validateUserInputs();


// Storing User Data Inputs to Local Storage
createAccBtn.addEventListener("click", createAccount);

function createAccount(){
    let localStorageKey = "AMG User Admin"
    // Get User Data as Objects
    const userData = {
        name: nameInput.value.trim(),
        username: usernameInput.value.trim(),
        password: passwordInput.value,
        backupPasscode: backupCodeInput.value,
        isLoggedIn: false
    }

    // Validate User Data Form
    validateUserInputs();

    // Save to Local Storage
    localStorage.setItem(localStorageKey, JSON.stringify(userData));
}