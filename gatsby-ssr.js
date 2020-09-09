/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';

// You can delete this file if you're not using it
import { wrapRootElement as wrap } from './root-wrapper';
import { COLORS, COLOR_MODE_STORAGE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from './src/consts';

function setColorsByTheme() {
  const colors = '🌈';
  const colorModeKey = '🔑';
  const colorModeCssProp = '⚡️';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } 
  else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_STORAGE_KEY)
    .replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP);

  let calledFunction = `(${boundFn})()`;
  
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}

export const wrapRootElement = wrap;