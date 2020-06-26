import React from 'react';
import Layout from '../components/layout';
import './mystyles.scss';
import { graphql, Link } from 'gatsby';
import ArticleTile from '../components/article-tile';
import ArticleTileContainer from '../components/article-tile-container';
import SEO from '../components/seo';
import TagsList from '../components/tags-list';
import { MobileHide } from '../components/shared-components';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <div className='container'>
        <div className='columns'>
          <MobileHide className='column'>
            <h3>tags</h3>
            <TagsList />
          </MobileHide>
          <div className='column is-four-fifths'>
            <h2 className='area-title'>words</h2>            
            <ArticleTileContainer>
              {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                <ArticleTile
                  title={frontmatter.title}
                  slug={fields.slug}
                  tags={frontmatter.tags}
                  previewText={frontmatter.teaser}
                  image={frontmatter.featuredImage.childImageSharp.fluid}
                />
              ))}
            </ArticleTileContainer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY2 {
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