document.addEventListener("DOMContentLoaded", () => {
  // Generate a unique player ID
  function generatePlayerID() {
    return `${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(
      1000 + Math.random() * 9000
    )}-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  // Handle Registration
  window.register = function () {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const username = document.getElementById("register-username").value;
    const playerID = generatePlayerID();

    // Validate input fields
    if (!email || !password || !username) {
      document.getElementById("register-message").textContent =
        "Please fill in all fields.";
      return;
    }

    // Check if the user already exists
    if (localStorage.getItem(email)) {
      document.getElementById("register-message").textContent =
        "User already exists.";
    } else {
      // Save user data to localStorage
      const userData = { password, username, playerID };
      localStorage.setItem(email, JSON.stringify(userData));
      document.getElementById("register-message").textContent =
        "Registration successful!";
      setTimeout(() => (window.location.href = "login.html"), 1000);
    }
  };

  // Handle Login
  window.login = function () {
    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    const email = emailInput.value;
    const password = passwordInput.value;
    const storedUser = localStorage.getItem(email);

    // Validate login inputs
    if (!email || !password) {
      document.getElementById("login-message").textContent =
        "Please enter both email and password.";
      return;
    }

    // Check if the email exists in localStorage
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      // Validate password
      if (userData.password === password) {
        document.getElementById(
          "login-message"
        ).textContent = `Login successful! Welcome, ${userData.username}`;
        document
          .getElementById("login-message")
          .classList.replace("text-red-500", "text-green-500");

        // Store the user info in localStorage (so they are "logged in")
        localStorage.setItem("loggedInUser", JSON.stringify(userData));

        // Redirect to home page after login
        setTimeout(() => (window.location.href = "index.html"), 1000);
      } else {
        document.getElementById("login-message").textContent =
          "Invalid email or password.";
      }
    } else {
      document.getElementById("login-message").textContent =
        "Invalid email or password.";
    }
  };
});
