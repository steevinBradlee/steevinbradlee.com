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
              <div style={{fontSize: '0.8rem', paddingBottom: '10px'}}>My name is <br/><b style={{color:'white',backgroundColor:'black'}}>Stephen Bradley</b><br/> and I like front-end development 👾</div>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/stephenbradley93/">LinkedIn</a>
              </div>
            </p>
          </MobileHide>
          <div className='column is-four-fifths'>
            <h2 className='area-title'>me me me</h2>
            <div>
              <p>Stephen here. I'm originally from Ireland - the middle bit. 
                I studied at Trinity College Dublin where I got my BA in Computer Science, Linguistics, 
                and German.
              </p>
              <p>
                After interning for a year at Microsoft Ireland doing cool computational linguistics
                things, I found myself in America on a year-long Visa. And as it turns out, I haven't 
                left yet. I've been working as a SharePoint
                consultant for the past few years. I've focused mostly on front-end customizations within SharePoint 
                but my work also involves creating workflows and automation scripts. I work mostly with React, 
                Node, and Typescript but enjoy dabbling in new frameworks and languages. I also have a 
                secret love for Python.
              </p>
              <p>
                My short term goal is to become a slick front-end dev and develop cool user experiences.
                Down the line I'd like to become a fullstack engineer and work on applications
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