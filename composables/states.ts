export const useTitle = () =>
  useState("app-title", () => "Microsoft Store Clone");

export const useThemeMode = () => useState("theme-mode", () => "dark");
