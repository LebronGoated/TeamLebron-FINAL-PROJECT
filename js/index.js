document.addEventListener("DOMContentLoaded", function () {
  // Function to update the navbar based on login state
  updateNavBar();

  function updateNavBar() {
    const signInButton = document.getElementById("sign-in-button");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      // If logged in, show the username and dropdown
      const userData = JSON.parse(loggedInUser);
      signInButton.textContent = userData.username; // Show in-game name
      signInButton.setAttribute("href", "#"); // Prevent navigating to login page
      signInButton.onclick = function (event) {
        event.preventDefault(); // Prevent default link behavior
        dropdownMenu.classList.toggle("hidden"); // Toggle dropdown
      };
    } else {
      // If not logged in, show Sign In
      signInButton.textContent = "Sign In";
      signInButton.setAttribute("href", "login.html"); // Link to login page
      signInButton.onclick = null; // Reset click handler
    }
  }

  // Logout function
  window.logout = function () {
    localStorage.removeItem("loggedInUser"); // Remove user from localStorage
    window.location.href = "login.html"; // Redirect to login page
  };

  // Function to go to the review page
  window.goToReview = function (name, price, image) {
    localStorage.setItem("reviewItem", JSON.stringify({ name, price, image }));
    window.location.href = "review.html";
  };
});
