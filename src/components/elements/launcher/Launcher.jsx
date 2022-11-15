import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import gqlLogo from '../../../images/icons/gql-logo.svg';
import homeIcon from '../../../images/icons/home.svg';
import './launcher.scss';

const Launcher = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        gqlUrl
        siteUrl
      }
    }
  }
`)

console.log(data);

  return (
    <div className="launcher">
      <a href={data.site.siteMetadata.gqlUrl} target="_blank" tooltip="Open GraphiQL" className="launcher__link">
        <img src={gqlLogo} height="20" width="20" aria-hidden="true" alt="" />
        <span className="visually-hidden">Open GraphiQL</span>
      </a>

      <a href={data.site.siteMetadata.siteUrl} target="_blank" tooltip="Open Root Domain" className="launcher__link">
        <img src={homeIcon} height="20" width="20" aria-hidden="true" alt="" />
        <span className="visually-hidden">Home</span>
      </a>
    </div>
  )
}

export default Launcher;
