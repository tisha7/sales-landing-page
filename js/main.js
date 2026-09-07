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
