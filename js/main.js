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

  if (hero && book && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function animateBook() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      book.style.transform =
        "translate3d(" + currentX + "px," + currentY + "px,0)";

      requestAnimationFrame(animateBook);
    }

    hero.addEventListener("mousemove", function (e) {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetX = x * 8;
      targetY = y * 6;
    });

    hero.addEventListener("mouseleave", function () {
      targetX = 0;
      targetY = 0;
    });

    animateBook();

    hero.addEventListener("touchstart", function () {
      book.style.transition = "transform .2s ease";
      book.style.transform = "scale(.985)";
    }, { passive: true });

    hero.addEventListener("touchend", function () {
      book.style.transition = "transform .35s ease";
      book.style.transform = "scale(1)";
    }, { passive: true });
  }

  /* =========================
     EVERGREEN TIMER (15 Min Loop)
  ========================= */
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
