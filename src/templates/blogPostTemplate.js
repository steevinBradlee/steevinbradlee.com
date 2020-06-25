import React from 'react';
import Layout from '../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

const BlogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
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
      }
    }
  }
`;