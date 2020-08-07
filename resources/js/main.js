// Import local modules
import "@modules/mobile-nav";
import "@modules/lazyload";
import "van11y-accessible-carrousel-aria";

[...document.getElementsByClassName("js-carrousel")].forEach(x =>
    van11yAccessibleCarrouselAria(x)
);
