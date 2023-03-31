// lightTheme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  backgroundImage: "../../assets/images/icons/search.svg",
  palette: {
    mode: "light",
    primary: {
      main: "#2196f3",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

// darkTheme.js

export const darkTheme = createTheme({
  backgroundImage: "../../assets/images/icons/search2.svg",
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});
