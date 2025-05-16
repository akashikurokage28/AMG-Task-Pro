// Reset password input references
const backupCodeInput = document.getElementById("backup-pass-input");
const newPassInput = document.getElementById("new-pass-input");
const confirmPassInput = document.getElementById("confirm-pass-input");
const resetPassBtn = document.querySelector(".reset-btn");


// Match the Backup Passcode Input to the Local Storage Backup Passcode to create new password
const localStorageKey = "AMG User Admin";

 // Input array for validation
 const userInputs = [backupCodeInput, newPassInput, confirmPassInput];
 // Live Input validation using ForEach loop
 userInputs.forEach((input) => {
     input.addEventListener("input", validateInputs);
 });


// Input validation Function
function validateInputs(){
    const isInputsEmpty = backupCodeInput.value === "" || newPassInput.value === "" || confirmPassInput.value === "";
    // Get the Backup Passcode from the local storage
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = JSON.parse(getUserData);

    // Validate the Form
    if (!isInputsEmpty && backupCodeInput.value === loadUserData.backupPasscode && confirmPassInput.value === newPassInput.value){
        // Remove the disabled state on the Reset Button
        resetPassBtn.removeAttribute("disabled");
    } else {
        resetPassBtn.setAttribute("disabled", "");
    }
}

validateInputs();


// Reset Password Function
resetPassBtn.addEventListener("click", resetPassword);
function resetPassword(){
     // Get the Backup Passcode from the local storage
     const getUserData = localStorage.getItem(localStorageKey);
     const loadUserData = JSON.parse(getUserData);

    // Change the old password and save it to the localstorage
     loadUserData.password = newPassInput.value;
    //  Set the isLoggedIn property to false
        loadUserData.isLoggedIn = "false";
     // Save the new password to the localstorage
     localStorage.setItem(localStorageKey, JSON.stringify(loadUserData));

     alert("Password has been reset successfully");

        // Redirect to the login page
        window.location.href = "../forms/login-form.html";
}


// Show the new password input
const showNewPassIcon = document.getElementById("show-new-pass");
showNewPassIcon.addEventListener("click", () => {
    if (newPassInput.type === "password") {
        newPassInput.type = "text";
        showNewPassIcon.classList.remove("ri-eye-fill");
        showNewPassIcon.classList.add("ri-eye-close-fill");
    } else {
        newPassInput.type = "password";
        showNewPassIcon.classList.add("ri-eye-fill");
        showNewPassIcon.classList.remove("ri-eye-close-fill");
    }
});

// Show the confirm password input
const showConfirmPassIcon = document.getElementById("show-confirm-pass");
showConfirmPassIcon.addEventListener("click", () => {
    if (confirmPassInput.type === "password") {
        confirmPassInput.type = "text";
        showConfirmPassIcon.classList.remove("ri-eye-fill");
        showConfirmPassIcon.classList.add("ri-eye-close-fill");
    } else {
        confirmPassInput.type = "password";
        showConfirmPassIcon.classList.add("ri-eye-fill");
        showConfirmPassIcon.classList.remove("ri-eye-close-fill");
    }
});

// Go back button
const goBackBtn = document.querySelector('.go-back-btn');
goBackBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    window.history.back();
});