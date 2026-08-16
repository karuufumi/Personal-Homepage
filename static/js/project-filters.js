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

  const selectedTechnologyOptions = (control) => [...control.querySelectorAll('[data-filter-option][aria-selected="true"]')]
    .filter((option) => option.dataset.value !== "all");

  const matches = (card, control) => {
    if (control.dataset.filterKey === "technology") {
      const selected = (control.dataset.selected || "").split("|").filter(Boolean);
      return selected.length === 0 || selected.some((technology) => card.dataset.technologies.split("|").includes(technology));
    }
    return control.dataset.value === "all" || card.dataset[control.dataset.filterKey] === control.dataset.value;
  };

  const updateProjects = () => {
    const activeFilters = controls.filter((control) => control.dataset.value !== "all");
    const visible = cards.filter((card) => {
      const matchesAll = activeFilters.every((control) => matches(card, control));
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
    const isMulti = control.dataset.multi === "true";

    const updateMultiLabel = () => {
      const selected = selectedTechnologyOptions(control);
      control.dataset.selected = selected.map((option) => option.dataset.value).join("|");
      control.dataset.value = selected.length ? selected.map((option) => option.dataset.value).join("|") : "all";
      label.textContent = selected.length === 0
        ? "All technologies"
        : selected.length === 1 ? selected[0].textContent : `${selected.length} technologies selected`;
    };

    const selectOption = (option) => {
      if (isMulti) {
        if (option.dataset.value === "all") {
          options.forEach((item) => item.setAttribute("aria-selected", String(item === option)));
        } else {
          const selected = option.getAttribute("aria-selected") === "true";
          option.setAttribute("aria-selected", String(!selected));
          options[0].setAttribute("aria-selected", "false");
        }
        updateMultiLabel();
        updateProjects();
        return;
      }

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
      if (event.key === "Escape") {
        closeMenus();
        return;
      }
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
          if (!isMulti) trigger.focus();
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-filter-control]")) closeMenus();
  });

  document.addEventListener("focusin", (event) => {
    if (!event.target.closest("[data-filter-control]")) closeMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const openControl = controls.find((control) => !control.querySelector(".project-filter-menu").hidden);
    if (!openControl) return;
    closeMenus();
    openControl.querySelector(".project-filter-trigger").focus();
  });

  reset.addEventListener("click", () => {
    closeMenus();
    controls.forEach((control) => {
      const option = control.querySelector('[data-filter-option][data-value="all"]');
      control.dataset.value = "all";
      control.dataset.selected = "";
      control.querySelector("[data-filter-label]").textContent = option.textContent;
      control.querySelectorAll("[data-filter-option]").forEach((item) => item.setAttribute("aria-selected", String(item === option)));
    });
    updateProjects();
  });

  updateProjects();
}
