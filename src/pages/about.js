import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { MobileHide } from '../components/shared-components';

import AvatarPic from '../images/profile.jpeg';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About' />
      <div className='container'>
        <div className='columns'>
          <MobileHide className='column'>
            <img src={AvatarPic} alt='stephen-bradley.com profile'></img>
            <p>
              <div>Hello!</div>
              <div style={{fontSize: '0.8rem'}}>My name is <br/><b style={{color:'white',backgroundColor:'black'}}>Stephen Bradley</b><br/> and I like front-end development 👾</div>
            </p>
          </MobileHide>
          <div className='column is-four-fifths'>
            <h2 class='area-title'>me me me</h2>
            <div>
              <p>Stephen (not with a V) here. I'm originally from Ireland, somewhere in the middle. 
                I studied Computer Science, Linguistics, and German at Trinity College Dublin,
                where I got my Bachelor (first-class honours baby 💯).
              </p>
              <p>
                After interning for a year at Microsoft Ireland doing cool computational linguistics
                things, I found myself in America on a year-long Visa. And as it turns out, I haven't 
                left yet (don't worry I'm here legally). I've been working as a SharePoint
                consultant for the past few years, mostly focusing on front-end and any custom
                development. I work mostly with React, Node, and Typescript but enjoy dabbling in new 
                frameworks and languages. I also have a secret love for Python but haven't really used
                it for my career...yet. 
              </p>
              <p>
                My shorter-term goal is to become an uber proficient front-end dev and work on cool user experiences.
                Down the line I want to become the full-stack full package and work on applications
                in fields I care about - <span style={{color:'green'}}>green energy</span>, sustainability 🌍, <i>the arts, </i>
                <span style={{color:'white',backgroundColor:'black'}}>science.</span>
              </p>
              <p>
                In my spare time I enjoy finding new music and weird movies, and also playing games
                and all that other nerdy jazz. I also discovered recently that running is surprisingly fun
                (who'd have known).
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AboutPage;