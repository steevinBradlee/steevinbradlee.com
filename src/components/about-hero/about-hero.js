import React from 'react';

import './about-hero.scss'; 

const AboutHero = () => (
  <div className='about-hero'>
    <div className='big'>Hi, I’m Stephen Bradley.<br />
      An Irish <span className='developer'>developer</span> currently<br />
      working in <span className='location'>Boston</span>.
    </div>
    <div className='small'>Interested in working together? Feel free to contact me for potential projects or collaborations.</div>
    <div className='small links'>
      <a href='mailto:stephen.jm.bradley93@gmail.com'>Email</a>
      <span className='spacer'>|</span>
      <a href='https://www.linkedin.com/in/stephenbradley93/'>LinkedIn</a>
      <span className='spacer'>|</span>
      <a>CV</a>
    </div>
  </div>
);

export default AboutHero;