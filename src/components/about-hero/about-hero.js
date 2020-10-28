import React from 'react';

import './about-hero.scss'; 
import LilSteve from '../../images/lil-deebz.svg';

const RESUME_PATH = '/Stephen Bradley Resume.pdf';

const AboutHero = () => (
  <div className='about-hero'>
    <div className='big'>Hi, I’m Stephen Bradley.
      An Irish <span className='developer'>developer</span> currently
      working in <span className='location'><span>Boston</span></span>.
    </div>
    <div className='small'>Interested in working together? Feel free to contact me for potential projects or collaborations.</div>
    <div className='small links'>
      <a href='mailto:stephen.jm.bradley93@gmail.com'>Email</a>
      <span className='spacer'>|</span>
      <a href='https://www.linkedin.com/in/stephenbradley93/'>LinkedIn</a>
      {/* <span className='spacer'>|</span>
      <a href={RESUME_PATH}>CV</a> */}
    </div>
    <div className='steve-box'>
      <img src={LilSteve} />
    </div>
    <div className='overlay'>
      <div className='big'>Hi, I’m Stephen Bradley.
        An Irish <span className='developer'>developer</span> currently
        working in <span className='location'><span>Boston</span></span>.
      </div>
      <div className='small'>Interested in working together? Feel free to contact me for potential projects or collaborations.</div>
      <div className='small links'>
        <a href='mailto:step15hen@gmail.com'>Email</a>
        <span className='spacer'>|</span>
        <a href='https://www.linkedin.com/in/stephenbradley93/'>LinkedIn</a>
        {/* <span className='spacer'>|</span>
        <a href={RESUME_PATH}>CV</a> */}
      </div>
      <div className='steve-box'>
        <img src={LilSteve} />
      </div>
    </div>
  </div>
);

export default AboutHero;