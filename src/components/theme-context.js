import React from 'react';
import { COLOR_MODE_STORAGE_KEY } from '../consts';
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
  const [colorMode, rawSetColorMode] = React.useState(getInitialColorMode);

  const storageKey = COLOR_MODE_STORAGE_KEY;

  const setColorMode = (value) => {
    const root = window.document.documentElement;
    rawSetColorMode(value);
    window.localStorage.setItem(storageKey, value);
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      root.style.setProperty(cssVarName, colorByTheme[value]);
    });
  }

  return (
    <ThemeContext.Provider value={{colorMode, setColorMode}}>
      { children }
    </ThemeContext.Provider>
  );
}