/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="content-wrap">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
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
        </div>
      </div>
      <footer
        style={{
          position: 'absolute',
          height: '65px',
          bottom: '0',
          padding: `1.0875rem 1.45rem`,
          backgroundColor: '#EEE',
          width: '100%',
        }}
      >
        <div 
          style={{
            maxWidth: '768px',
            margin: `0 auto`,
            flexGrow: 1,
            textAlign: 'center'
          }}
        >
          © stephen-bradley • {new Date().getFullYear()}
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
