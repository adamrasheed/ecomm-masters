import React from "react"
import PropTypes from "prop-types"
import GlobalProvider from "./Global/Context"
import { StaticQuery, graphql } from "gatsby"

import "../fonts.css"
import "../styles/main.scss"

import Header from "./header"
import FooterNav from "./Global/footerNav"

class Layout extends React.Component {
  perfectAudience() {}
  render() {
    const { children } = this.props
    return (
      <GlobalProvider>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <>
              <Header siteTitle={data.site.siteMetadata.title} />
              <main>{children}</main>
              <footer className="center small footer">
                <div className="footer__credits">
                  © {new Date().getFullYear()},{" "}
                  <a
                    href="https://adamrasheed.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Adam Rasheed
                  </a>
                  {"    "}
                  <span>Not affiliated with Shopify®</span>
                </div>
                <FooterNav />
              </footer>
            </>
          )}
        />
      </GlobalProvider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
