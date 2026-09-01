/* GENCOTT — nav, theme, reveal-on-scroll. No dependencies. */
(function () {
  "use strict";

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Theme toggle (persisted) ---- */
  var STORE = "gencott-theme";
  var root = document.documentElement;

  /* Light cotton is the default regardless of the OS setting — dark is opt-in. */
  function currentDark() {
    return root.getAttribute("data-theme") === "dark";
  }
  function apply(theme) {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach(function (b) {
      b.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    });
  }

  try {
    var saved = localStorage.getItem(STORE);
    if (saved === "dark" || saved === "light") apply(saved);
  } catch (e) { /* storage blocked — fall back to system */ }

  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentDark() ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(STORE, next); } catch (e) {}
    });
  });

  /* ---- Reveal on scroll ---- */
  var targets = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (t) { t.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- Application form (static site: no backend) ---- */
  var form = document.querySelector("form.apply");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var out = form.querySelector(".form-result");
      if (out) {
        out.textContent =
          "Thanks — this demonstration site has no backend, so nothing was sent. " +
          "Wire this form to your own endpoint or mailto address before going live.";
        out.hidden = false;
      }
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
