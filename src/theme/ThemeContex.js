import { createContext } from "react";

const ThemeContext = createContext({
  theme: "light",
  setThemeMode: () => {},
});

export default ThemeContext;
