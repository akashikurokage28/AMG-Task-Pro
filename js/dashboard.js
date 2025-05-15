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