"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import {
  getPreferredTheme,
  applyTheme,
  setTheme,
  themeChangeEvent,
  themeStorageKey,
  type Theme,
} from "@/lib/theme";

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: light)");
  function syncPreference() {
    document.documentElement.dataset.theme = getPreferredTheme();
    onChange();
  }
  function onStorage(event: StorageEvent) {
    if (event.key === themeStorageKey || event.key === null) syncPreference();
  }
  window.addEventListener(themeChangeEvent, onChange);
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", syncPreference);
  return () => {
    window.removeEventListener(themeChangeEvent, onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", syncPreference);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const pathname = usePathname();
  // Locale navigation updates the root HTML element. Reapply the preference
  // after that update and before the browser paints the new page.
  useLayoutEffect(() => {
    applyTheme(getPreferredTheme());
  }, [pathname]);
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    theme,
    toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
