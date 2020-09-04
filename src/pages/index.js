import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import ArticleTile from '../components/article-tile/article-tile';
import ArticleTileContainer from '../components/article-tile-container';
import SEO from '../components/seo';
import { MobileHide } from '../components/shared-components';
import IntroHero from '../components/intro-header/intro-hero';

import AvatarPic from '../images/profile.jpeg';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <div className='columns is-centered'>
        <div className='column content-center'>
          <div style={{paddingTop: '90px', paddingBottom: '77px'}}>
            <IntroHero />
          </div>
          <h2 className='area-title' style={{paddingTop: '47px'}}>Recent Articles</h2>
          <ArticleTileContainer>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }, index) => (
              <ArticleTile
                title={frontmatter.title}
                slug={fields.slug}
                tags={frontmatter.tags}
                previewText={frontmatter.teaser}
                image={frontmatter.featuredImage.childImageSharp.fluid}
                key={`article-tile-${index}`}
              />
            ))}
          </ArticleTileContainer>
        </div>
        {/* <MobileHide className='column'>
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
          <h2 className='area-title'>recent</h2>
          <ArticleTileContainer>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }, index) => (
              <ArticleTile
                title={frontmatter.title}
                slug={fields.slug}
                tags={frontmatter.tags}
                previewText={frontmatter.teaser}
                image={frontmatter.featuredImage.childImageSharp.fluid}
                key={`article-tile-${index}`}
              />
            ))}
          </ArticleTileContainer>
        </div> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          teaser
        }
        fields {
          slug
        }
      }
    }
  }
`;