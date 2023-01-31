import React from "react";
import { Button, ThemeProvider } from "@react95/core";
import "@react95/icons/icons.css";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Button>Click me!</Button>
      </ThemeProvider>
    </div>
  );
};

export default App;
