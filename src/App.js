import { Route, Routes } from "react-router";
import { AppStyle } from "./assets/styles/AppStyle";
import { Login } from "./components/Login/Login";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "./lang/generator/LangGenerator";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme/generator/ThemeGenertor";
import ThemeContext from "./theme/themeContex/ThemeContex";
import { Modules } from "./pages";

const token = localStorage.getItem("token");

function App() {
  // Theme provider
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "light"
  );
  const theme = themeMode === "light" ? lightTheme : darkTheme;

  if (token) {
    return (
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <ThemeProvider theme={theme}>
          <AppStyle theme={theme.palette.mode}>
            <Modules />
          </AppStyle>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
  return (
    <AppStyle>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AppStyle>
  );
}

export default App;
