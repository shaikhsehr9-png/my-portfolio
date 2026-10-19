"use strict";

const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const navigation = document.querySelector(".site-nav");
const updateNavigation = () => {
  navigation?.classList.toggle("scrolled", window.scrollY > 24);
};
updateNavigation();
window.addEventListener("scroll", updateNavigation, { passive: true });

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.querySelectorAll("#mainNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    if (nav?.classList.contains("show") && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});
