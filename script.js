const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav2");

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
