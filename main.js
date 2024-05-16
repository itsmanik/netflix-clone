/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener("click", () => {
        // Add show-menu class to nav menu
        nav.classList.toggle("show-menu");

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle("show-icon");
    });
};

var cursor = document.getElementById("cursor");
const cursorPointed = document.querySelector('.pointed');
document.body.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursorPointed.style.left = e.clientX + "px";
    cursorPointed.style.top = e.clientY + "px";
    
});

showMenu("nav-toggle", "nav-menu");
