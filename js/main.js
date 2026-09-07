document.addEventListener("DOMContentLoaded", function () {
  const config = window.PARENTURA_CONFIG || {};
  const checkoutUrl = config.checkoutUrl || "https://your-checkout-link.com/pay";

  /* =========================
     CHECKOUT LINK CONFIGURATION
  ========================= */
  document.querySelectorAll("[data-checkout-link]").forEach(function (link) {
    link.href = checkoutUrl;
  });

  /* =========================
     SCROLL REVEAL OBSERVER
  ========================= */
  const revealElements = document.querySelectorAll(".pp-reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("active");
    });
  }

  /* =========================
     HERO INTERACTION
  ========================= */
  const hero = document.querySelector(".pp-hero");
  const book = document.querySelector(".pp-hero .pp-real-book");

  if (
    hero &&
    book &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {

    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      book.style.setProperty("--hero-mx", (x * 9).toFixed(2) + "px");
      book.style.setProperty("--hero-my", (y * 7).toFixed(2) + "px");
    });

    hero.addEventListener("mouseleave", function () {
      book.style.setProperty("--hero-mx", "0px");
      book.style.setProperty("--hero-my", "0px");
    });

    hero.addEventListener("touchstart", function () {
      book.classList.add("is-touching");
    }, { passive: true });

    hero.addEventListener("touchend", function () {
      book.classList.remove("is-touching");
    }, { passive: true });

    hero.addEventListener("touchcancel", function () {
      book.classList.remove("is-touching");
    }, { passive: true });
  }

  let timeRemaining = 15 * 60;
  const clockElement = document.getElementById("pp-evergreen-clock");

  if (!clockElement) return;

  function updateClock() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    clockElement.textContent =
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0");

    if (timeRemaining > 0) {
      timeRemaining--;
    } else {
      timeRemaining = 15 * 60;
    }
  }

  updateClock();
  window.setInterval(updateClock, 1000);
});
