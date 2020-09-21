import React from 'react';
import { ThemeContext } from '../theme-context';

import './resume.scss'; 

import InsightDark from '../../images/dark/Insight.png';
import MicrosoftDark from '../../images/dark/Microsoft.png';
import AdaptDark from '../../images/dark/Adapt.png';
import TrinityDark from '../../images/dark/Trinity.png';

import InsightLight from '../../images/light/Insight.png';
import MicrosoftLight from '../../images/light/Microsoft.png';
import AdaptLight from '../../images/light/Adapt.png';
import TrinityLight from '../../images/light/Trinity.png';

const Resume = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const insightImg = colorMode === 'dark' ? InsightDark : InsightLight;
  const microsoftImg = colorMode === 'dark' ? MicrosoftDark : MicrosoftLight;
  const adaptImg = colorMode === 'dark' ? AdaptDark : AdaptLight;
  const trinityImg = colorMode === 'dark' ? TrinityDark : TrinityLight;
  
  return (
    <div className='resume'>
      <div className=''>
        <div className='content-center'>
          <h2 className='area-title' style={{paddingTop: '47px'}}>Experience</h2>
          <div className='experience-rows'>
            <div className='experience'>
              <div className='left'>
                <div className='image-frame'>
                  <img src={insightImg}/>
                </div>
              </div>
              <div className='right'>
                <div className='title'>Software Engineer</div>
                <div className='sub-sub-title'>Insight</div>
                <div className='time-span'>
                  <div className='time-point'>
                    <div>
                      <div className='sub-title'>Software Engineer</div>
                      <div className='detail'>Nov 2016 - Oct 2017  | 1 yr</div>
                      <div className='detail'>Watertown, Massachusetts</div>
                      <div className='body'>Office 365 Sharepoint, Sharepoint 2016, React, SPFX</div>
                    </div>
                  </div>
                  <div className='time-point'>
                    <div>
                      <div className='sub-title'>Associate Software Engineer</div>
                      <div className='detail'>Nov 2016 - Oct 2017  | 1 yr</div>
                      <div className='detail'>Watertown, Massachusetts</div>
                    </div>
                  </div>
                  <div className='time-point'>
                    <div>
                      <div className='sub-title'>Software Engineer Intern</div>
                      <div className='detail'>Nov 2016 - Oct 2017  | 1 yr</div>
                      <div className='detail'>Watertown, Massachusetts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='experience'>
              <div className='left'>
                <div className='image-frame'>
                  <img src={microsoftImg}/>
                </div>
              </div>
              <div className='right'>
                <div className='title'>Applied Scientist (Computational Linguistics) Intern</div>
                <div className='sub-sub-title'>Microsoft, Natural Language Experiences Team</div>
                <div className='detail'>July 2015 - July 2016 | 1 yr</div>
                <div className='detail'>Microsoft European Development Center, Dublin, Ireland</div>
                <div className='body'></div>
              </div>
            </div>
            <div className='experience'>
              <div className='left'>
                <div className='image-frame'>
                  <img src={adaptImg}/>
                </div>
              </div>
              <div className='right'>
                <div className='title'>Research Assistant (Consulting)</div>
                <div className='sub-sub-title'>ADAPT Centre</div>
                <div className='detail'>Mar 2016 - May 2016  | 3 mos</div>
                <div className='detail'>Dublin, Ireland</div>
                <div className='body'>Collaborated with a team of researchers at the ADAPT Centre on a project submitted as part of the Blizzard TTS Challenge 2016. My work involved extending the novel-parsing system I created for my final year project in University.</div>
              </div>
            </div>
            <div className='experience'>
              <div className='left'>
                <div className='image-frame'>
                  <img src={trinityImg}/>
                </div>
              </div>
              <div className='right'>
                <div className='title'>Computer Science, Linguistics, and German</div>
                <div className='sub-sub-title'>Bachelor of Arts</div>
                <div className='detail'>Sep 2011 - May 2015  | 4 yrs</div>
                <div className='detail'>Trinity College Dublin, Ireland</div>
                <div className='body'>Collaborated with a team of researchers at the ADAPT Centre on a project submitted as part of the Blizzard TTS Challenge 2016. My work involved extending the novel-parsing system I created for my final year project in University.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Resume;