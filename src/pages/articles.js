import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import ArticlePreview from '../components/article-preview/article-preview';
import Pagination from '../components/pagination/pagination';
import styled from 'styled-components';

import CLOSE_ICON from '../images/close.png';

const ArticlesContainer = styled.div`
  .article-preview {
    padding-bottom: 40px;
  }

  /* @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 29px;
    row-gap: 23px;

    .article-preview {
      padding-bottom: 0px;
    }
  } */

  @media screen and (max-width: 440px) {
    display: block;

    .article-preview {
      padding-bottom: 23px;
    }
  }
`;

const BigTag = styled.span`
  > a {
    background-color: var(--color-accent);
    color: white;
    margin-right: 10px;
    text-decoration: none;
    border-radius: 13px;
    font-size: 13px;
    padding: 0px 11.5px;
    height: 26px;
    font-family: Sofia-Pro, sans-serif;
    display: flex;
    align-items: center;
    transition: background-color 0.5s;

    &:hover {
      background-color: var(--color-secondary);
    }

    > span {
      &:first-child {
        padding-right: 7px;
      }

      &:last-child {
        border-radius: 50%;
        background: white;
        padding: 5px;
        box-sizing: border-box;
        height: 16px;
        width: 16px;

        img {
          height: 100%;
          display: block;
        }
      }
    }
  }
`;

export default ({ data, pageContext }) => {
  const { tag } = pageContext;
  const [page, setPage] = useState(0);

  let articles;
  if (tag) {
    articles = data.allMdx.nodes.filter(node => {
      return node.frontmatter.tags.indexOf(tag) > -1;
    });
  }
  else {
    articles = data.allMdx.nodes;
  }
  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  const numItemsPerPage = 8;
  const startIndex = (page) * numItemsPerPage;
  const endIndex = (page + 1) * numItemsPerPage;

  return (
    <Layout>
      <SEO title='Articles' />
      <div className=''>
        <div className='content-center main'>
          <div style={{paddingBottom: '23px'}}>
            <h2 className='area-title' style={{paddingTop: '47px', paddingBottom: '0px'}}>Articles</h2>
            <div style={{display: 'flex', alignItems: 'center', paddingTop: '15px'}}>
              {tag &&
                <>
                  <BigTag>
                    <Link to={'/articles'}>
                      <span>{ tag }</span>
                      <span><img src={CLOSE_ICON} /></span>
                    </Link>
                  </BigTag>
                  <span style={{color: 'var(--color-text)'}}>
                    <span style={{padding: '0px 10px 0px 3px'}}>|</span>
                    <span>{`${articles.length} ${articles.length === 1 ? 'article' : 'articles'}`}</span>
                  </span>
                </>
              }
            </div>
          </div>
          <ArticlesContainer>
            {articles.slice(startIndex, endIndex).map(({ id, excerpt, frontmatter, fields }) => (
              <ArticlePreview
                key={`article-preview-${id}`}
                title={frontmatter.title}
                slug={fields.slug}
                tags={frontmatter.tags}
                previewText={frontmatter.teaser ? frontmatter.teaser : excerpt}
                image={frontmatter.featuredImage.childImageSharp.fluid}
              />
            ))}
          </ArticlesContainer >
          <div style={{paddingTop: '56px'}}>
            <Pagination 
              numItems={data.allMdx.nodes.length} 
              numItemsPerPage={numItemsPerPage} 
              onPageChange={changePage}
            />
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
        excerpt(pruneLength: 500)
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