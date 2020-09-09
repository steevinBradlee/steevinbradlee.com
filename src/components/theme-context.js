import React from 'react';
import { COLOR_MODE_STORAGE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../consts';
import { COLORS } from '../consts';

function getInitialColorMode() {
  const storageKey = COLOR_MODE_STORAGE_KEY;
  const persistedColorPreference = window.localStorage.getItem(storageKey);
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) {
    return persistedColorPreference;
  }

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';

  if (hasMediaQueryPreference) {
    return mql.matches ? 'dark' : 'light';
  }

  return 'light';
}

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = React.useState(undefined);

  const storageKey = COLOR_MODE_STORAGE_KEY;
  const initialColorModeCssProp = INITIAL_COLOR_MODE_CSS_PROP;

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(initialColorModeCssProp);
    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (newValue) => {
    const root = window.document.documentElement;
    window.localStorage.setItem(storageKey, newValue);
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });
    rawSetColorMode(newValue);
  }

  return (
    <ThemeContext.Provider value={{colorMode, setColorMode}}>
      { children }
    </ThemeContext.Provider>
  );
}