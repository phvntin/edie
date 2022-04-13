const body = document.body;
const mobileBtn = document.querySelector(".navbar-mobile");
const menu = document.querySelector(".navbar-menu");

mobileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("active");
});

body.addEventListener("click", () => {
  menu.classList.remove("active");
});
