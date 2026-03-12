const savedTheme = localStorage.getItem("theme");
const bodyElement = document.querySelector("body");
const themeToggleButton = document.querySelector(".theme-toggle");

if (savedTheme === "light") {
  bodyElement.classList.add("light-mode");
  themeToggleButton.classList.replace("fa-moon", "fa-sun");
}

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

const aboutTitle = document.querySelector("#about h2");
const titles = ["Full-Stack Developer", ".NET Developer", "Angular Developer"];
let titleIndex = 0;

setInterval(() => {
  aboutTitle.classList.add("fade-out");

  setTimeout(() => {
    titleIndex = (titleIndex + 1) % titles.length;
    aboutTitle.textContent = titles[titleIndex];
    aboutTitle.classList.remove("fade-out");
  }, 400);
}, 2500);

themeToggleButton.addEventListener("click", () => {
  if (bodyElement.classList.contains("light-mode")) {
    bodyElement.classList.remove("light-mode");
    themeToggleButton.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  } else {
    bodyElement.classList.add("light-mode");
    themeToggleButton.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  }
});
