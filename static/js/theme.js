(() => {
  const key = "theme";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let saved = localStorage.getItem(key);

  const apply = theme => { root.dataset.theme = theme; };
  apply(saved === "dark" || saved === "light" ? saved : (systemTheme.matches ? "dark" : "light"));

  const sync = () => {
    const dark = root.dataset.theme === "dark";
    document.querySelectorAll("[id^='theme-toggle']").forEach(button => {
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  };
  document.querySelectorAll("[id^='theme-toggle']").forEach(button => button.addEventListener("click", () => {
    apply(root.dataset.theme === "dark" ? "light" : "dark");
    saved = root.dataset.theme;
    localStorage.setItem(key, saved);
    sync();
  }));
  systemTheme.addEventListener("change", event => {
    if (saved !== "dark" && saved !== "light") apply(event.matches ? "dark" : "light");
    sync();
  });
  sync();
})();
