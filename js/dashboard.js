const logoutBtn = document.getElementById("logout-btn");
const changePassBtn = document.getElementById("change-pass-btn");
const deleteAccBtn = document.getElementById("remove-account");

// Logout Function
logoutBtn.addEventListener("click", logout)

function logout() {
    let localStorageKey = "AMG User Admin";
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = getUserData ? JSON.parse(getUserData) : null;

    if (loadUserData) {
        // Set isLoggedIn to false
        loadUserData.isLoggedIn = "false";
        localStorage.setItem(localStorageKey, JSON.stringify(loadUserData));
    }

    // Redirect to Homepage after logout
    window.location.href = "../homepage.html";
}


// Change password Function logic
changePassBtn.addEventListener("click", changePassword);

function changePassword(){
    // Redirect to the Change Password Page
    window.location.href = "../forms/reset-pass.html";
}

// Delete Account Function logic
deleteAccBtn.addEventListener("click", deleteAccount);
function deleteAccount(){
    // Get the local storage key
    let localStorageKey = "AMG User Admin";
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = getUserData ? JSON.parse(getUserData) : null;

    if (loadUserData) {
        // Show confirmation prompt
        const confirmDelete = confirm("Do you want to delete your account?");
        if (confirmDelete) {
            // Remove the user data from local storage
            localStorage.removeItem(localStorageKey);
            alert("Account has been deleted successfully");
            // Redirect to the Homepage
            window.location.href = "../homepage.html";
        }
    }
}