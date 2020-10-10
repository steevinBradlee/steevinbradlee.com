import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutHero from '../components/about-hero/about-hero';
import Resume from '../components/resume/resume';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding-top: 71px;

  @media screen and (max-width: 440px) {
    padding-top: 22px;
  }
`;

const ResumeContainer = styled.div`
  @media screen and (max-width: 1024px) {
    .resume {
      margin: 0px -1.75rem;
      padding: 0px 1.75rem;
    }
  }
`;

const AboutPage = () => {
  return (
    <Layout>
      <SEO title='About' />
      <div className=''>
        <div className='content-center main' style={{paddingBottom: '0px'}}>
          <HeroContainer>
            <AboutHero />
          </HeroContainer>
        </div>
      </div>
      <ResumeContainer>
        <Resume />
      </ResumeContainer>
    </Layout>
  )
}
export default AboutPage;