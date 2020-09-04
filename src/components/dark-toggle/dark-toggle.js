import React from 'react';
import { ThemeContext } from '../theme-context';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label className={'dark-toggle'}>
      <input 
        type='checkbox'
        checked={colorMode === 'dark'}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />
      <span>{ colorMode === 'dark' ? 'dark' : 'light'}</span>
    </label>
  );
};

export default DarkToggle;