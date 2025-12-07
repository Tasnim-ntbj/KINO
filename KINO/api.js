const navbar = document.getElementById("mainNavbar");
const scrollThreshold = 100;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

//carousel
