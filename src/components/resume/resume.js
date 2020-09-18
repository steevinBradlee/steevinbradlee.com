import React from 'react';

import './resume.scss'; 

const Resume = () => (
  <div className='resume'>
    <div className='columns is-centered'>
      <div className='column content-center'>
        <h2 className='area-title' style={{paddingTop: '47px'}}>Experience</h2>
        <div className='experience-rows'>
          <div className='experience'>
            <div className='left'>
              <div className='image-frame'>
                <img src=''/>
              </div>
            </div>
            <div className='right'>
              <div className='title'>Software Engineer Intern</div>
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
                    <div className='sub-title'>Software Engineer</div>
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
                <img src=''/>
              </div>
            </div>
            <div className='right'>
              <div className='title'>Software Engineer Intern</div>
              <div className='sub-sub-title'>Insight</div>
              <div className='detail'>Nov 2016 - Oct 2017  | 1 yr</div>
              <div className='detail'>Watertown, Massachusetts</div>
              <div className='body'></div>
            </div>
          </div>
          <div className='experience'>
            <div className='left'>
              <div className='image-frame'>
                <img src=''/>
              </div>
            </div>
            <div className='right'>
              <div className='title'>Software Engineer Intern</div>
              <div className='sub-sub-title'>Insight</div>
              <div className='detail'>Nov 2016 - Oct 2017  | 1 yr</div>
              <div className='detail'>Watertown, Massachusetts</div>
              <div className='body'>Collaborated with a team of researchers at the ADAPT Centre on a project submitted as part of the Blizzard TTS Challenge 2016. My work involved extending the novel-parsing system I created for my final year project in University.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;