(function MobileNav() {
  document
    .getElementById("mobile-nav-toggle")
    .addEventListener("click", function () {
      this.classList.toggle("menu-toggle-active");
      document.getElementById("mobile-nav").classList.toggle("menu-visible");

      // set aria-expanded attribute on menu toggle button
      if (this.getAttribute("aria-expanded") === "false") {
        this.setAttribute("aria-expanded", "true");
      } else {
        this.setAttribute("aria-expanded", "false");
      }
    });
})();

[...document.getElementsByClassName("js-carrousel")].forEach((x) =>
  van11yAccessibleCarrouselAria(x)
);
