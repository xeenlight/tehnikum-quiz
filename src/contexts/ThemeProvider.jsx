import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import { useState, useEffect, useMemo } from "react";

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const persistedTheme = JSON.parse(localStorage.getItem("currentTheme"));
    if (persistedTheme) {
      setThemeValue(persistedTheme);
    }
  }, []);
  
  const toggleTheme = () => {
    setThemeValue((prev) => {
      let newTheme = prev === themes.light ? themes.dark : themes.light;
      localStorage.setItem("currentTheme", JSON.stringify(newTheme));
      return newTheme;
    });
  };

  const contextsValue = useMemo(() => ({
    theme: themeValue,
    toggleTheme,
  }), [themeValue]);

  return (
    <ThemeContext.Provider value={contextsValue}>
      {children}
    </ThemeContext.Provider>
  );
};
