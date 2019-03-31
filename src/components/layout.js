import React from "react"
import PropTypes from "prop-types"
import GlobalProvider from "./Global/Context"
import { StaticQuery, graphql } from "gatsby"

import "../fonts.css"
import "../styles/main.scss"

import Header from "./header"

const Layout = ({ children }) => (
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
          </footer>
        </>
      )}
    />
  </GlobalProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
