// Check Login Status
function checkLoginStatus() {
    // Local Storage Key
    let localStorageKey = "AMG User Admin";

    // Load User Data from Local Storage
    const getUserData = localStorage.getItem(localStorageKey);
    const loadUserData = getUserData ? JSON.parse(getUserData) : null;

    // Get the current page path
    const currentPath = window.location.pathname;

    // Check if the user is logged in
    if (loadUserData && loadUserData.isLoggedIn === "true") {
        // Redirect to Dashboard if not already there
        if (currentPath !== "/forms/dashboard.html") {
            window.location.href = "../forms/dashboard.html";
        }
    } else {
        // Redirect to Homepage if the user is logged out
        if (currentPath === "/forms/dashboard.html") {
            // Prevent access to dashboard.html
            window.location.href = "../homepage.html";
        } else if (currentPath !== "/homepage.html") {
            // Redirect to homepage if on any other page
            window.location.href = "../homepage.html";
        }
    }
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", checkLoginStatus);