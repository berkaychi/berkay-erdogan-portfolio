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
