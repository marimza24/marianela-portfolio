document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
  document.querySelectorAll("[data-event]").forEach((element) => {
    element.addEventListener("click", () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", element.dataset.event, {
          event_category: "portfolio_interaction",
          link_url: element.href || undefined
        });
      }
    });
  });
});