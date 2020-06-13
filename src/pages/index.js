import React from 'react';
import Layout from '../components/Layout';
import './mystyles.scss';
import { graphql, Link } from 'gatsby';
import Dump from '../components/Dump';
import ArticleTile from '../components/ArticleTile';
import ArticleTileContainer from '../components/ArticleTileContainer';
import styled from 'styled-components';
import SEO from '../components/Seo';

import AvatarPic from '../../public/github-pic.png';

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
            <img src={AvatarPic} alt='stephen-bradley.com profile'></img>
          </div>
          <div className='column is-four-fifths'>
            {/* <Dump data={data} /> */}
            <AreaTitle>recent</AreaTitle>
            <ArticleTileContainer>
              {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                <ArticleTile
                  title={frontmatter.title}
                  slug={fields.slug}
                  tags={['react', 'gatsby']}
                  previewText={excerpt}
                  image={''}
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
  query SITE_INDEX_QUERY {
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
        }
        fields {
          slug
        }
      }
    }
  }
`;