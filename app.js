const burger = document.querySelector(".header .nav-bar .nav-list .burger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

if ($(window).width() <= 820) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
}

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#1b1e24";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

if ($(window).width() <= 820) {
  menu_item.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });
  });
}
