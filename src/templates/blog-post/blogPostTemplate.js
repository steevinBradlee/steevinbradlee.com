import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../../components/seo';
import useHasMounted from '../../hooks/useHasMounted';
import './blog-post-template.scss';
import TableOfContents from '../../components/table-of-contents/table-of-contents';
import useCurrentWitdh from '../../hooks/useCurrentWidth';

const headerQuery = `
  .article-mdx-body h1,
  .article-mdx-body h2,
  .article-mdx-body h3
`;
const BlogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  const hasMounted = useHasMounted();
  const screenWidth = useCurrentWitdh();

  let headerElements;
  if (hasMounted) { 
    headerElements = Array.from(document.querySelectorAll(headerQuery));
  }

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className={`content-center main blog-post ${screenWidth <= 768 ? 'mobile' : ''}`}>
        <article className='article-lead'>
          <h1 style={{marginBottom: '10px'}}>{frontmatter.title}</h1>
          {frontmatter.teaser &&
            <h2 style={{marginBottom: '10px'}}>{frontmatter.teaser}</h2>
          }
          <p>{frontmatter.date}</p>
          <div className="article-image-container">
            <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          </div>
          <div className='article-mdx-body'>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
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
        </article>
        <aside className={`article-side ${screenWidth <= 768 ? 'hidden' : ''}`}>
          <div className='side-fixed'>
            {(headerElements && headerElements.length > 0) &&
              <TableOfContents headerElements={headerElements} />
            }
          </div>
        </aside>
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