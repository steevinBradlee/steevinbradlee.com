/**
 * SEO component for the Gatsby Head API. Pages render it from
 * `export const Head = () => <SEO title='...' />`.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description = ``, image: metaImage, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const image = metaImage && metaImage.src
    ? `${metaImage.src}`
    //? `${site.siteMetadata.siteUrl}${metaImage.src}`
    : site.siteMetadata.image;

  return (
    <>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords.join(',')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {metaImage && <meta property="og:image:width" content={metaImage.width} />}
      {metaImage && <meta property="og:image:height" content={metaImage.height} />}
      <meta name="twitter:card" content={metaImage ? `summary_large_image` : `summary`} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="stylesheet" href="https://use.typekit.net/euj8wqa.css" />
      {children}
    </>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  children: PropTypes.node,
}

export default SEO
