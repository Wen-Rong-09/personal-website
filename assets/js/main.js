document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-carousel]").forEach((track) => {
    const group = track.closest(".section") || track.parentElement;
    const prevBtn = group?.querySelector("[data-carousel-prev]");
    const nextBtn = group?.querySelector("[data-carousel-next]");
    if (!track) return;

    const scrollByCard = (direction) => {
      const card = track.querySelector(":scope > *");
      const distance = card ? card.getBoundingClientRect().width + 24 : 300;
      track.scrollBy({ left: direction * distance, behavior: "smooth" });
    };

    prevBtn?.addEventListener("click", () => scrollByCard(-1));
    nextBtn?.addEventListener("click", () => scrollByCard(1));
  });
});
