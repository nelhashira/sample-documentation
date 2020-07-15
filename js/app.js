const navToggle = document.querySelector("#nav-toggle");
const navBar = document.querySelector("#nav-bar");

navToggle.addEventListener("click", function () {
   navBar.classList.toggle("scroll-content-open");
});
