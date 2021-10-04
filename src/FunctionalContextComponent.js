import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

function FunctionalContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyle = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "100px",
    margin: "100px",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyle}>Function Theme</div>
    </>
  );
}

export default FunctionalContextComponent;
