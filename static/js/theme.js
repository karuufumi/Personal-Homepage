(() => {
  const key = "theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(key);
  root.dataset.theme = saved === "dark" ? "dark" : "light";

  const sync = () => {
    const dark = root.dataset.theme === "dark";
    document.querySelectorAll("[id^='theme-toggle']").forEach(button => {
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
    });
  };
  document.querySelectorAll("[id^='theme-toggle']").forEach(button => button.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem(key, root.dataset.theme);
    sync();
  }));
  sync();
})();
