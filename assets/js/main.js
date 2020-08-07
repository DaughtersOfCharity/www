(function mobileNav() {
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

(function activateCarrousel() {
  window.addEventListener("load", function loadImages() {
    const images = document.querySelectorAll(".js-carrousel img[loading=lazy]");
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("loading", "eager");
    }
  });
})();
