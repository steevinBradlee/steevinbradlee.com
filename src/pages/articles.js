import React, { useState } from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import ArticleTile from '../components/article-tile/article-tile';
import ArticleTileContainer from '../components/article-tile-container';
import SEO from '../components/seo';
import TagsList from '../components/tags-list';
import { MobileHide } from '../components/shared-components';
import ArticlePreview from '../components/article-preview/article-preview';
import Pagination from '../components/pagination/pagination';

export default ({ data }) => {
  const [page, setPage] = useState(0);

  const changePage = (pageNum) => {
    setPage(pageNum);
  };

  const numItemsPerPage = 1;
  const startIndex = (page) * numItemsPerPage;
  const endIndex = (page + 1) * numItemsPerPage;

  return (
    <Layout>
      <SEO title='Articles' />
      <div className='columns is-centered'>
        <div className='column content-center'>
        <h2 className='area-title' style={{paddingTop: '47px', paddingBottom: '23px'}}>Articles</h2>
        <div>
          {data.allMdx.nodes.slice(startIndex, endIndex).map(({ id, excerpt, frontmatter, fields }) => (
            <ArticlePreview
              key={`article-preview-${id}`}
              title={frontmatter.title}
              slug={fields.slug}
              tags={frontmatter.tags}
              previewText={frontmatter.teaser ? frontmatter.teaser : excerpt}
              image={frontmatter.featuredImage.childImageSharp.fluid}
              style={{paddingBottom: '40px'}}
            />
          ))}
        </div>
        <Pagination 
          numItems={data.allMdx.nodes.length} 
          numItemsPerPage={numItemsPerPage} 
          onPageChange={changePage}
        />
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