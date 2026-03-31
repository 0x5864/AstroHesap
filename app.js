const searchForm = document.querySelector("#toolSearchForm");
const searchInput = document.querySelector("#toolSearchInput");
const toolCards = Array.from(document.querySelectorAll(".top-city-card"));
const resultsCount = document.querySelector("#resultsCount");
const searchStatus = document.querySelector("#searchStatus");
const emptyState = document.querySelector("#emptyState");

const normalize = (value) =>
  value
    .toLocaleLowerCase("tr-TR")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

const updateCards = (rawQuery) => {
  const query = normalize(rawQuery);
  let visibleCount = 0;

  toolCards.forEach((card) => {
    const keywords = normalize(card.dataset.keywords ?? "");
    const content = normalize(card.textContent ?? "");
    const isVisible = !query || keywords.includes(query) || content.includes(query);

    card.hidden = !isVisible;
    if (isVisible) {
      visibleCount += 1;
    }
  });

  if (resultsCount) {
    resultsCount.textContent = String(visibleCount);
  }

  if (searchStatus) {
    searchStatus.textContent = query
      ? `"${rawQuery}" için ${visibleCount} araç gösteriliyor.`
      : "Arama kutusu ile kartları anında filtreleyebilirsin.";
  }

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
};

searchInput?.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  updateCards(target.value);
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!(searchInput instanceof HTMLInputElement)) {
    return;
  }

  updateCards(searchInput.value);
});

updateCards("");
