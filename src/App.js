import React from "react";
import { ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";
import Desktop from "./components/Desktop";

const App = () => {
  return (
    <ThemeProvider>
      <Desktop />
    </ThemeProvider>
  );
};

export default App;
