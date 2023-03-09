import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";

import Theme from "./components/assets/Theme";

import "@fontsource/quicksand/300.css";
import "@fontsource/quicksand/500.css";
import "@fontsource/quicksand/700.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
