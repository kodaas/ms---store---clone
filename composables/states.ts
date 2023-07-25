// App Title
export const useTitle = () =>
  useState("app-title", () => "Microsoft Store Clone");

// Light And Dark Theme
export const useThemeMode = () => useState("theme-mode", () => "system dark");

export const useToggleTheme = () => {
  const themeMode = useThemeMode();

  if (themeMode.value === "light") {
    themeMode.value = "dark";
  } else if (themeMode.value === "dark") {
    themeMode.value = "system";
  } else if (themeMode.value.includes("system")) {
    themeMode.value = "light";
  }
};

// Search Input
export const useSearchInput = () => useState("search-input", () => "");

export const useSearchInputElement = () =>
  useState<HTMLInputElement | null>("search-input-element", () => null);

export const clearSearchInput = ({
  focusSearch = false,
}: {
  focusSearch?: boolean;
}) => {
  useSearchInput().value = "";

  if (focusSearch) useSearchInputElement().value?.focus();
};
