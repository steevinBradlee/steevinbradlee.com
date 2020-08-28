import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
//import './layout.css';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/css/line-awesome.min.css"
        />
      </Helmet>
      <div className="content-wrap">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div class="columns content-center">
          <div class="column">
            <main className='site-main-content'>{children}</main>
          </div>
        </div>
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
