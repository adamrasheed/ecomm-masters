import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/page-index/Hero"
import Benefits from "../components/page-index/Benefits"
import FormSection from "../components/page-index/FormSection"
import { isAbsolute } from "path"
import AboutBody from "../components/page-about/about"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={[
            `Shopify Development Tutorial`,
            `Shopify Theme Development`,
            `Custom Shopify Themes`,
          ]}
        />
        <AboutBody />
      </Layout>
    )
  }
}

export default IndexPage
