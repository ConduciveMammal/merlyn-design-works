import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import gqlLogo from '../../../images/icons/gql-logo.svg';
import homeIcon from '../../../images/icons/home.svg';
import refreshIcon from '../../../images/icons/reload.svg';
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

const refreshData = (evt) => {
  evt.target.classList.add('clicked')
  fetch('/__refresh', {
    method: 'POST'
  })
  .then(() => {
    console.log('GraphQL data refreshed.');
    setTimeout(() => {
      evt.target.classList.remove('clicked')
    }, 200);
  });
}

  return (
    <div className="launcher">
      <a href={data.site.siteMetadata.gqlUrl} target="_blank" tooltip="Open GraphiQL" className="launcher__link" rel="noreferrer">
        <img src={gqlLogo} height="20" width="20" aria-hidden="true" alt="" />
        <span className="visually-hidden">Open GraphiQL</span>
      </a>

      <button tooltip="Open Root Domain" className="launcher__link" onClick={(evt) => refreshData(evt)}>
        <img src={refreshIcon} height="20" width="20" aria-hidden="true" alt="" />
        <span className="visually-hidden">Refresh</span>
      </button>

      <a href={data.site.siteMetadata.siteUrl} target="_blank" tooltip="Open Root Domain" className="launcher__link" rel="noreferrer">
        <img src={homeIcon} height="20" width="20" aria-hidden="true" alt="" />
        <span className="visually-hidden">Home</span>
      </a>
    </div>
  )
}

export default Launcher;
