document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const menuBars = document.getElementById("menu-bars");
    const menuTimes = document.getElementById("menu-times");
    const loginBtn = document.getElementById("login-btn");
    const loginModal = document.getElementById("login-modal");
    const mobileLoginBtn = document.getElementById("mobile-login-btn");
    const mobileLoginModal = document.getElementById("mobile-login-modal");
    let showNav = false;

    loginBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the click from triggering document event
        loginModal.classList.toggle("hidden");
    });

    // Close modal when clicking outside
    document.addEventListener("click", function(event) {
        if (!loginModal.contains(event.target) && event.target !== loginBtn) {
            loginModal.classList.add("hidden");
        }
    });

    mobileLoginBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        mobileLoginModal.classList.toggle("hidden");
    });

    // Close modal when clicking outside
    document.addEventListener("click", function(event) {
        if (!mobileLoginModal.contains(event.target) && event.target !== mobileLoginBtn) {
            mobileLoginModal.classList.add("hidden");
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            navbar.classList.add("bg-[#000]", "bg-opacity-90");
        } else {
            navbar.classList.remove("bg-[#000]", "bg-opacity-90");
        }
    });

    menuIcon.addEventListener("click", function () {
        showNav = !showNav;
        mobileNav.style.height = showNav ? "100vh" : "0";
        menuBars.classList.toggle("hidden", showNav);
        menuTimes.classList.toggle("hidden", !showNav);
        menuIcon.style.color = showNav ? "black" : "white";
    });
});