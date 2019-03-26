import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/page-index/Hero"
import Intro from "../components/page-index/Intro"
import BenefitsIntro from "../components/page-index/BenefitsIntro.js"
import Benefits from "../components/page-index/Benefits"
import Form from "../components/Form.js/Form"
import { GlobalContext } from "../components/Global/Context"
import FormSection from "../components/page-index/FormSection"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
