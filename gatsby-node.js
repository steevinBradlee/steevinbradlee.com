/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require("lodash")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(
    'src/templates/blog-post/blogPostTemplate.js'
  );
  const tagsRoundupTemplate = path.resolve(
    'src/templates/tagsRoundupTemplate.js'
  );
  const articles = path.resolve(
    'src/pages/articles.js'
  );

  const result = await graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
    
  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.nodes;

  // create page for each mdx file
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    createPage({
      path: post.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.fields.slug,
        previous,
        next
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // create roundup page for each tag
  tags.forEach(tag => {
    createPage({
      path: `/articles/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: articles,
      context: {
        tag: tag.fieldValue,
      },
    })
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};