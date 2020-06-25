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
import './myLayout.css';

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
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          flexGrow: 1,
          position: 'relative'
        }}
      >
        <div style={{
          maxWidth: '768px',
          margin: '1.45rem auto 0px'
        }}>
          <main class='site-main-content'>{children}</main>
          <footer
            style={{
              padding: `1.0875rem 1.45rem`,
              backgroundColor: '#EEE',
              width: '100%',
              position: 'absolute',
              left: '0px',
              height: '65px',
              bottom: '-65px'

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
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
