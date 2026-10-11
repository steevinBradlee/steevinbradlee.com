import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import ArticleTile from '../components/article-tile/article-tile';
import ArticleTileContainer from '../components/article-tile-container/article-tile-container';
import SEO from '../components/seo';
import IntroHero from '../components/intro-header/intro-hero';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding-top: 90px;
  padding-bottom: 77px;

  @media screen and (max-width: 768px) {
    padding-top: 59px;
  }

  @media screen and (max-width: 440px) {
    padding-bottom: 0px;
    padding-top: 27px;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>
        <div className='content-center main'>
          <HeroContainer>
            <IntroHero />
          </HeroContainer>
          <h2 className='area-title' style={{paddingTop: '47px'}}>Recent Articles</h2>
          <ArticleTileContainer>
            {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }, index) => (
              <ArticleTile
                title={frontmatter.title}
                date={frontmatter.date}
                slug={fields.slug}
                tags={frontmatter.tags}
                previewText={frontmatter.teaser}
                image={frontmatter.featuredImage}
                key={`article-tile-${index}`}
              />
            ))}
          </ArticleTileContainer>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <SEO title='Home' />;

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, breakpoints: [400, 800])
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