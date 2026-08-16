const projectList = document.querySelector("[data-project-list]");

if (projectList) {
  const controls = [...document.querySelectorAll("[data-filter-control]")];
  const cards = [...projectList.querySelectorAll("[data-project-card]")];
  const result = document.querySelector("[data-project-results]");
  const empty = document.querySelector("[data-project-empty]");
  const reset = document.querySelector("[data-project-reset]");

  const closeMenus = (except = null) => {
    controls.forEach((control) => {
      if (control === except) return;
      control.querySelector(".project-filter-menu").hidden = true;
      control.querySelector(".project-filter-trigger").setAttribute("aria-expanded", "false");
    });
  };

  const matches = (card, key, value) => {
    if (value === "all") return true;
    if (key === "technology") return card.dataset.technologies.split("|").includes(value);
    return card.dataset[key] === value;
  };

  const updateProjects = () => {
    const activeFilters = controls.filter((control) => control.dataset.value !== "all");
    const visible = cards.filter((card) => {
      const matchesAll = activeFilters.every((control) => matches(card, control.dataset.filterKey, control.dataset.value));
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
    reset.disabled = activeFilters.length === 0;
  };

  controls.forEach((control) => {
    const trigger = control.querySelector(".project-filter-trigger");
    const menu = control.querySelector(".project-filter-menu");
    const options = [...control.querySelectorAll("[data-filter-option]")];
    const label = control.querySelector("[data-filter-label]");

    const selectOption = (option) => {
      control.dataset.value = option.dataset.value;
      label.textContent = option.textContent;
      options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
      menu.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
      updateProjects();
    };

    trigger.addEventListener("click", () => {
      const isOpen = !menu.hidden;
      closeMenus();
      menu.hidden = isOpen;
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });

    trigger.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "Enter", " "].includes(event.key)) return;
      event.preventDefault();
      closeMenus(control);
      menu.hidden = false;
      trigger.setAttribute("aria-expanded", "true");
      options[0].focus();
    });

    options.forEach((option, index) => {
      option.addEventListener("click", () => selectOption(option));
      option.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          menu.hidden = true;
          trigger.setAttribute("aria-expanded", "false");
          trigger.focus();
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          options[(index + 1) % options.length].focus();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          options[(index - 1 + options.length) % options.length].focus();
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectOption(option);
          trigger.focus();
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-filter-control]")) closeMenus();
  });

  reset.addEventListener("click", () => {
    controls.forEach((control) => {
      const option = control.querySelector('[data-filter-option][data-value="all"]');
      control.dataset.value = "all";
      control.querySelector("[data-filter-label]").textContent = option.textContent;
      control.querySelectorAll("[data-filter-option]").forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    });
    updateProjects();
  });

  updateProjects();
}
