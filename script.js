const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navlist li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

const scrollTopButton = document.querySelector(".scroll-top");

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopButton.classList.add("active");
  } else {
    scrollTopButton.classList.remove("active");
  }
});
