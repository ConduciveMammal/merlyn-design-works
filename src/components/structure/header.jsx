import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../../images/mdw-logo.svg';
import './header.scss';

const Header = ({ siteTitle }) => (
  <header
    className="header">
    <div className="header__logo">
      <Link to="/">
        <img
          alt={siteTitle}
          height={50}
          loading="eager"
          src={logo}
        />
      </Link>
    </div>

    <div className="header__navigation-wrapper">
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li><Link to="/">About me</Link></li>
          <li><Link to="/projects">Portfolio</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
      </nav>
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
