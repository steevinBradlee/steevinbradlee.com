import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: '1.75rem' }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div style={{ display: 'flex' }}>
        <h1 style={{ margin: 0, paddingRight: '20px', fontSize: '1.75rem' }}>
          <Link
            to="/articles"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >words</Link>
        </h1>
        <h1 style={{ margin: 0, fontSize: '1.75rem' }}>
          <Link
            to="/about"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >about</Link>
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
