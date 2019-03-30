import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/page-index/Hero"
import Benefits from "../components/page-index/Benefits"
import FormSection from "../components/page-index/FormSection"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Learn Shopify Development"
          keywords={[
            `Shopify Development Tutorial`,
            `Shopify Theme Development`,
            `Custom Shopify Themes`,
          ]}
        />
        <Hero />
        <Benefits />
        <FormSection />

        {/*
       - Footer
    */}
      </Layout>
    )
  }
}

export default IndexPage
