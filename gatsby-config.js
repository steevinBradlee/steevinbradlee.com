module.exports = {
  siteMetadata: {
    title: `stephen-bradley.com`,
    description: `Tutorials for developer. Focus on front-end development and process automation.`,
    author: `Stephen Bradley`,
    siteUrl: 'https://www.stephen-bradley.com',
    keywords: [
      'React',
      'Web',
      'Development',
      'Angular',
      'PowerShell',
      'Font-End',
    ],
    image: '/lil-deebz.png',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-styled-components',
    // Must also be listed at the top level for gatsby-plugin-mdx v5
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `article-header`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Stephen Bradley`,
        short_name: `Stephen Bradley`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#021D44`,
        display: `minimal-ui`,
        icon: `src/images/lil-deebz.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-BQ0WK11K3S`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
