(() => {
  const input = document.querySelector("#site-search-input");
  const results = document.querySelector("#search-results");
  const status = document.querySelector("#search-status");
  const clear = document.querySelector(".site-search-clear");
  const indexElement = document.querySelector("#search-index");
  if (!input || !results || !status || !clear || !indexElement) return;

  const index = [...indexElement.querySelectorAll("[data-search-item]")].map(item => ({ ...item.dataset }));
  const relatedTerms = {
    api: ["backend", "server", "service", "fastapi", "nestjs", "rest"],
    backend: ["api", "server", "database", "fastapi", "nestjs", "service"],
    cloud: ["deployment", "deploy", "docker", "aws", "hosting", "infrastructure"],
    deployment: ["cloud", "deploy", "docker", "hosting", "infrastructure"],
    database: ["postgresql", "mongodb", "sql", "data", "backend"],
    testing: ["test", "selenium", "postman", "validation", "quality"],
    security: ["secure", "cryptography", "noise", "privacy", "authentication"],
    distributed: ["systems", "websocket", "workflow", "service", "backend"],
    mobile: ["swiftui", "museum", "ios", "application"],
    restaurant: ["menu", "order", "table", "full-stack"],
    library: ["borrowing", "catalog", "books", "management"],
    photo: ["photos", "photography", "gallery", "images"],
    photos: ["photo", "photography", "gallery", "images"],
    life: ["personal", "student", "semester", "reflection"],
    media: ["movie", "conan", "review"],
    semester: ["student", "life", "reflection", "university"]
  };
  let activeIndex = -1;

  const normalize = value => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9+#.]+/g, " ").trim();
  const tokens = value => normalize(value).split(" ").filter(Boolean);
  const escapeHtml = value => value.replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

  function scoreItem(item, queryTerms) {
    const title = normalize(item.title);
    const description = normalize(item.description);
    const keywords = normalize(item.keywords);
    const content = normalize(item.content);
    let score = 0;

    queryTerms.forEach(term => {
      if (title.includes(term)) score += 12;
      if (keywords.includes(term)) score += 7;
      if (description.includes(term)) score += 5;
      if (content.includes(term)) score += 2;
      (relatedTerms[term] || []).forEach(related => {
        if (`${title} ${keywords} ${description} ${content}`.includes(related)) score += 1.5;
      });
    });
    return score;
  }

  function render(query) {
    const queryTerms = tokens(query);
    clear.hidden = !queryTerms.length;
    activeIndex = -1;

    if (!queryTerms.length) {
      status.textContent = "";
      results.innerHTML = "";
      return;
    }

    const matches = index
      .map(item => ({ item, score: scoreItem(item, queryTerms) }))
      .filter(match => match.score > 0)
      .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
      .slice(0, 8);

    status.textContent = matches.length ? `${matches.length} suggestion${matches.length === 1 ? "" : "s"} found.` : "No matches yet. Try a related word or a broader phrase.";
    results.innerHTML = matches.map(({ item }) => `<a class="search-result" href="${escapeHtml(item.url)}"><span class="search-result-type">${escapeHtml(item.type)}</span><span class="search-result-title">${escapeHtml(item.title)}</span><span class="search-result-description">${escapeHtml(item.description)}</span></a>`).join("");
  }

  input.addEventListener("input", event => render(event.target.value));
  clear.addEventListener("click", () => {
    input.value = "";
    input.focus();
    render("");
  });
  input.addEventListener("keydown", event => {
    const suggestions = [...results.querySelectorAll(".search-result")];
    if (!suggestions.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = event.key === "ArrowDown" ? (activeIndex + 1) % suggestions.length : (activeIndex - 1 + suggestions.length) % suggestions.length;
      suggestions.forEach((suggestion, index) => suggestion.classList.toggle("is-active", index === activeIndex));
      suggestions[activeIndex].focus();
    }
    if (event.key === "Escape") clear.click();
  });
  results.addEventListener("keydown", event => {
    if (event.key === "Escape") clear.click();
  });
  input.focus();
})();
