export type Theme = "dark" | "light";

export const themeStorageKey = "kenny-portfolio-theme";
export const themeChangeEvent = "portfolio-theme-change";

export function getPreferredTheme(): Theme {
  try {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(themeChangeEvent));
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Keep the selected theme for the current page even without storage.
  }
  applyTheme(theme);
}

// Apply the saved preference before the first paint to avoid a theme flash.
export const themeInitializationScript = `
(function () {
  var theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  try {
    var saved = localStorage.getItem('${themeStorageKey}');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {}
  document.documentElement.dataset.theme = theme;
})();`;
