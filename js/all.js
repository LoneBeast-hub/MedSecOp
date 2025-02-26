document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.getElementById("menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const menuBars = document.getElementById("menu-bars");
    const menuTimes = document.getElementById("menu-times");
    let showNav = false;

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