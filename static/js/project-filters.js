const projectList = document.querySelector("[data-project-list]");

if (projectList) {
  const filters = [...document.querySelectorAll("[data-project-filter]")];
  const cards = [...projectList.querySelectorAll("[data-project-card]")];
  const result = document.querySelector("[data-project-results]");
  const empty = document.querySelector("[data-project-empty]");
  const reset = document.querySelector("[data-project-reset]");
  const filterState = () => filters.some((filter) => filter.value !== "all");

  const matches = (card, filter, value) => {
    if (value === "all") return true;
    if (filter === "technology") return card.dataset.technologies.split("|").includes(value);
    if (filter === "year") return card.dataset.years.split("|").includes(value);
    return card.dataset[filter] === value;
  };

  const updateProjects = () => {
    const visible = cards.filter((card) => {
      const matchesAll = filters.every((filter) => matches(card, filter.dataset.projectFilter, filter.value));
      card.hidden = !matchesAll;
      card.setAttribute("aria-hidden", String(!matchesAll));
      if (matchesAll) {
        card.classList.remove("project-card-enter");
        requestAnimationFrame(() => card.classList.add("project-card-enter"));
      }
      return matchesAll;
    });

    result.textContent = `Showing ${visible.length} of ${cards.length} projects`;
    empty.hidden = visible.length > 0;
    reset.disabled = !filterState();
  };

  filters.forEach((filter) => filter.addEventListener("change", updateProjects));
  reset.addEventListener("click", () => {
    filters.forEach((filter) => { filter.value = "all"; });
    updateProjects();
  });
  updateProjects();
}
