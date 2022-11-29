import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

import Header from "./header"
import Launcher from "../elements/launcher/Launcher"
import "./layout.scss"

mixpanel.init('ea2d329669bf08368bb26e4a79ac9109', {debug: true});


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
  // mixpanel.track(data.site.siteMetadata?.title);

  return (
    <>
      <MixpanelProvider mixpanel={mixpanel}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            &copy; {new Date().getFullYear()} &middot; Liam Merlyn
          </footer>
          {
            process.env.ENV === 'development' ? (
              <Launcher />
            ) : null
          }
        </div>
      </MixpanelProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
