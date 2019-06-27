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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
