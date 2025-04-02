document.addEventListener("DOMContentLoaded", function () {
    function adjustElements() {
        const logo = document.querySelector(".niantic-logo");
        const banner = document.querySelector(".banner img");
        const headerText = document.querySelector("header h1");

        if (window.innerWidth < 768) {
            // For smaller screens (mobile)
            logo.style.width = "80px";  // Adjust logo size
            banner.style.width = "90%"; // Make banner responsive
            headerText.style.fontSize = "18px"; // Reduce header font size
        } else {
            // For larger screens (desktop)
            logo.style.width = "120px"; // Default logo size
            banner.style.width = "60%";  // Default banner size
            headerText.style.fontSize = "24px"; // Default header size
        }
    }

    // Run on load and window resize
    adjustElements();
    window.addEventListener("resize", adjustElements);
});
