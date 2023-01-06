import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import logo from '../../images/mdw-logo.svg';
import './header.scss';



const Header = ({ siteTitle }) => {
  const navigationLinks = useStaticQuery(graphql`
    query getNavigationItems {
      allContentfulNavigationItem {
        edges {
          node {
            menuTitle
            menuUrl
            id
          }
        }
      }
    }
  `)
  const navigation = navigationLinks.allContentfulNavigationItem.edges;
  console.log(navigation);
    return (
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
          {
            navigation.map((item) => {
              const link = item.node;
              return (
                <li key={link.id}>
                  <Link to={link.menuUrl}>{link.menuTitle}</Link>
                </li>
              );
            })
          }
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
