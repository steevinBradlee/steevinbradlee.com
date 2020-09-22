import React from 'react';
import Layout from '../components/layout';
import ArticleTile from '../components/article-tile/article-tile';
import ArticleTileContainer from '../components/article-tile-container/article-tile-container';
import SEO from '../components/seo';
import TagsList from '../components/tags-list';
import { graphql } from 'gatsby';

const tagsRoundupTemplate = ({ data, pageContext }) => {
  //const { frontmatter, body } = data.mdx;
  //const { previous, next } = pageContext;
  const { tag } = pageContext;
  const taggedArticles = data.allMdx.nodes.filter(node => {
    return node.frontmatter.tags.indexOf(tag) > -1;
  });
  return (
    <Layout>
      <SEO title='Tags' />
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h3>tags</h3>
            <TagsList />
          </div>
          <div className='column is-four-fifths'>
          <h2>Articles tagged {tag}</h2>
            <ArticleTileContainer>
              {taggedArticles.map(({ id, excerpt, frontmatter, fields }) => (
                <ArticleTile
                  title={frontmatter.title}
                  slug={fields.slug}
                  tags={frontmatter.tags}
                  previewText={frontmatter.teaser}
                  image={frontmatter.featuredImage.childImageSharp.fluid}
                />
              ))}
            </ArticleTileContainer>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default tagsRoundupTemplate;

export const query = graphql`
  query TAGGED_ARTICLES_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
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