import React from 'react';
import { ThemeContext } from '../theme-context';

import './dark-toggle.scss';

import ON_SOUND from '../../sounds/on.mp3';
import OFF_SOUND from '../../sounds/off.mp3';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <label className={`dark-toggle ${colorMode === 'dark' ? 'dark' : ''}`} >
      <input 
        type='checkbox'
        checked={colorMode === 'dark'}
        onChange={ev => {
          if (ev.target.checked) {
            document.getElementById('onSound').play();
          }
          else {
            document.getElementById('offSound').play();
          }
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />
      <audio id='onSound' src={ON_SOUND} preload='auto'></audio>
      <audio id='offSound' src={OFF_SOUND} preload='auto'></audio>
        {/* <button onclick='document.getElementById("sound1").play();'>Play
        it</button> */}
    </label>
  );
};

export default DarkToggle;