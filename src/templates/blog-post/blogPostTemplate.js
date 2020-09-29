import React from 'react';
import Layout from '../../components/layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../../components/seo';
import useHasMounted from '../../hooks/useHasMounted';
import './blog-post-template.scss';
import TableOfContents from '../../components/table-of-contents/table-of-contents';
import useCurrentWitdh from '../../hooks/useCurrentWidth';
import styled from 'styled-components';

const headerQuery = `
  .article-mdx-body h1,
  .article-mdx-body h2,
  .article-mdx-body h3
`;

const ArticleContainer = styled.div`
  background-color: #0f141a;
  @media screen and (max-width: 1024px) {
    margin: 0px -1.75rem;
    padding: 0px 1.75rem;
  }
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
      <div className='blog-post'>
        <div className={`header content-center main ${screenWidth <= 768 ? 'mobile' : ''}`}>
          <div>
            <h1 className='blog-title'>{frontmatter.title}</h1>
            {frontmatter.teaser &&
              <div className='blog-teaser'>{frontmatter.teaser}</div>
            }
            <div className='blog-date'>{frontmatter.date}</div>
            {/* <div className='article-image-container'>
              <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
            </div> */}
          </div>
        </div>
        <div className='article-container'>
          <div>
            <article className='article-lead'>
              <div className='article-mdx-body'>
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </article>
            <aside className={`article-side`}>
              <div className='side-sticky'>
                {(headerElements && headerElements.length > 0) &&
                  <TableOfContents 
                    headerElements={headerElements} 
                    slug={pageContext.slug ? pageContext.slug.slice(0, -1) : ''}
                  />
                }
              </div>
            </aside>
          </div>
          {/* <div style={{display:'flex'}}>
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
          </div> */}
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
        date(formatString: "MMMM Do, YYYY")
        teaser
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