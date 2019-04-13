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
              file(relativePath: { eq: "royal-palm.png" }) {
                childImageSharp {
                  fluid(maxHeight: 1440) {
                    ...GatsbyImageSharpFluid
                  }
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
              <script
                dangerouslySetInnerHTML={{
                  __html:
  (function() {
    window._pa = window._pa || {};
        
    var pa = document.createElement('script'); pa.type = 'text/javascript'; pa.async = true;
    pa.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + "//tag.marinsm.com/serve/5cb16d62c10f65a1fc000003.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(pa, s);
  })();
                }}
              />
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
