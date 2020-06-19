import React from 'react';
import Layout from '../components/layout';
import './mystyles.scss';
import { graphql, Link } from 'gatsby';
import ArticleTile from '../components/article-tile';
import ArticleTileContainer from '../components/article-tile-container';
import styled from 'styled-components';
import SEO from '../components/seo';
import TagsList from '../components/tags-list';

const AreaTitle = styled.h2`
  background-color: black;
  color: white;
  padding: 8px 24px;
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title='Home' />
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h3>tags</h3>
            <TagsList />
          </div>
          <div className='column is-four-fifths'>
            <AreaTitle>words</AreaTitle>
            <ArticleTileContainer>
              {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                <ArticleTile
                  title={frontmatter.title}
                  slug={fields.slug}
                  tags={frontmatter.tags}
                  previewText={excerpt}
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
        excerpt(pruneLength: 250)
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
        }
        fields {
          slug
        }
      }
    }
  }
`;