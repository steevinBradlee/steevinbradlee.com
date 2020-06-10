import React from 'react';
import Layout from '../components/layout';
import LeftColLayout from '../components/leftColLayout';
import './mystyles.scss';
import { graphql } from 'gatsby';
import Dump from '../components/Dump';

const avatar = require('../../public/github-pic.jpg');

export default ({ data }) => {
  return (
    <Layout>
      <LeftColLayout
        leftColChildren={
          <img src={avatar} alt='stephen-bradley.com profile'></img>
        }
        mainBodyChildren={
          <>
            <Dump data={data} />
            {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
              <>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </>
            ))}
          </>
        }
      >
      </LeftColLayout>
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
      }
    }
  }
`;