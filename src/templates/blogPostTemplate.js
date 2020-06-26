import React from 'react';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1 style={{marginBottom: '10px'}}>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <div className="article-image-container">
        <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
      </div>
      <MDXRenderer>{body}</MDXRenderer>
      <div style={{display:'flex'}}>
        <div style={{width:'50%',display:'flex',justifyContent:'flex-start'}}>
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug} style={{textDecoration:'none'}}>
                  <p>
                    <div>{'<<'} 👶</div>
                    <div>{previous.frontmatter.title}</div>
                  </p>
                </Link>
              )}
            </>
          )}
        </div>
        <div style={{width:'50%',display:'flex',justifyContent:'flex-end'}}>
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug} style={{textDecoration:'none'}}>
                  <p>
                    <div style={{textAlign:'right'}}>🧙‍♂️ {'>>'}</div>
                    <div>{next.frontmatter.title}</div>
                  </p>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;