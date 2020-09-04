import React from 'react';

import './intro-hero.scss'; 

const IntroHero = () => (
  <div className='intro-hero'>
    <div className='big'>
      <div>Hey,</div>
      <div>
        <span>I'm a <span className='developer'>developer<div className='line line1'></div>
        <div className='dots'>.....</div>
        <div className='line line2'></div>
        <div className='line line3'></div>
        <div className='line line4'></div></span>.</span>
      </div>
    </div>
    <div className='small'>I also enjoy running, being a cute bitch, going shopping,  blah blah blah blah blah.</div>
  </div>
);

export default IntroHero;