import React from 'react';
import { COLOR_MODE_STORAGE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../consts';
import { COLORS } from '../consts';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  const storageKey = COLOR_MODE_STORAGE_KEY;

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP,
    );
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = newValue => {
    const root = window.document.documentElement;
    window.localStorage.setItem(storageKey, newValue);
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
    rawSetColorMode(newValue);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
