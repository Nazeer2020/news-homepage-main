const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const PrimaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  console.log("it is clicked")
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  PrimaryHeader.toggleAttribute("data-overlay");
});
