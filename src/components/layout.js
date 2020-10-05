import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
import Footer from './footer/footer';
import SEO from '../components/seo';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className='content-wrap'>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className='site-main-content'>{children}</main>
      </div>
      <Footer />
      <div id='menuOverlay'></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
