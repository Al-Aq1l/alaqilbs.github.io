const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.querySelector(".nav-menu");

  menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

document.addEventListener("click", function (e) {
  if (!menuIcon.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
