(function () {
  "use strict";

  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");

  function closeNav() {
    if (nav) nav.classList.remove("nav--open");
    if (burger) burger.setAttribute("aria-expanded", "false");
  }

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("nav--open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  document.querySelectorAll(".banner-cta img").forEach(function (img) {
    img.addEventListener("error", function () {
      var wrap = img.closest(".banner-cta");
      if (wrap) wrap.classList.add("is-broken");
    });
  });
})();
