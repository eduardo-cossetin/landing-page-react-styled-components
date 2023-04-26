import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
