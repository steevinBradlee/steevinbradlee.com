import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header/header';
//import './layout.css';
import { Helmet } from 'react-helmet';
import Footer from './footer/footer';
import useHasMounted from '../hooks/useHasMounted';

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
        {/* <div className='columns is-centered'>
          <div className='column content-center'>
            <main className='site-main-content'>{children}</main>
          </div>
        </div> */}
        {/* <div
          style={{
            flex: 1,
            height: '100%'
          }}
        >
          <div style={{
            maxWidth: '768px',
            margin: '1.45rem auto 0px',
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'space-between'
          }}>
            <main className='site-main-content'>{children}</main>
          </div>
        </div> */}
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
