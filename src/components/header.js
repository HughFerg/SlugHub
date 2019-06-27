import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/slughub-logo.jpg'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
  <ul>
    <li><img src={logo} /></li>
  </ul>
    {/* <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        maxHeight: 100,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
      <img src={logo} />
        </Link>
      </h1>
    </div> */}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
