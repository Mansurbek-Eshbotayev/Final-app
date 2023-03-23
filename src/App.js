import { Route, Routes } from "react-router";
import { AppStyle } from "./assets/styles/AppStyle";
import { Login } from "./components/Login/Login";
import { Home } from "./pages/Home";
import { ThemeProvider } from "@mui/material/styles";
import i18n from "./lang/LangGenerator";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme/ThemeGenertor";
import ThemeContext from "./theme/ThemeContex";
import useSearchStore, { SearchContext } from "./context/CreateZustand";

const token = localStorage.getItem("token");

function App() {
  // search provider
  const searchStore = useSearchStore();
  // console.log(searchStore);

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
            <SearchContext.Provider value={searchStore}>
              <Routes>
                <Route path="/*" element={<Home />} />
              </Routes>
            </SearchContext.Provider>
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
