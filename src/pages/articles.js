import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import ArticlePreview from '../components/article-preview/article-preview';
import Pagination from '../components/pagination/pagination';
import styled from 'styled-components';

const ArticlesContainer = styled.div`
  .article-preview {
    padding-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 29px;
    row-gap: 23px;

    .article-preview {
      padding-bottom: 0px;
    }
  }
`;

export default ({ data }) => {
  const [page, setPage] = useState(0);

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
          <h2 className='area-title' style={{paddingTop: '47px', paddingBottom: '23px'}}>Articles</h2>
          <ArticlesContainer>
            {data.allMdx.nodes.slice(startIndex, endIndex).map(({ id, excerpt, frontmatter, fields }) => (
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