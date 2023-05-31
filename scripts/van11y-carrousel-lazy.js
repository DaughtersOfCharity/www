document
  .querySelectorAll(".js-carrousel .js-carrousel__content:first-of-type img")
  .forEach((firstImg) => {
    firstImg.onload = function (e) {
      e.target
        .closest(".carrousel")
        .querySelectorAll("img")
        .forEach((img) => (img.loading = "eager"));
    };
  });
