export const useTitle = () =>
  useState("app-title", () => "Microsoft Store Clone");

// Light And Dark Theme
export const useThemeMode = () => useState("theme-mode", () => "dark");

export const useToggleTheme = () => {
  const themeMode = useThemeMode();

  if (themeMode.value === "light") {
    themeMode.value = "dark";
  } else if (themeMode.value === "dark") {
    themeMode.value = `system ${usePreferredDark().value ? "dark" : "light"}`;
  } else if (themeMode.value.includes("system")) {
    themeMode.value = "light";
  }
};
