import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/page-index/Hero"
import Intro from "../components/page-index/Intro"
import BenefitsIntro from "../components/page-index/BenefitsIntro.js"
import Benefits from "../components/page-index/Benefits"
import Button from "../components/global/Button"
import Form from "../components/Form.js/Form"

class IndexPage extends React.Component {
  scrollTop() {
    console.log("srcolling to top")
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        {/* FORM */}
        <div className="form-wrapper">
          <Form />
        </div>
        <Intro />
        <BenefitsIntro />
        <Benefits />
        <button className="button back-to-top" onClick={this.scrollTop}>
          Back to Top
        </button>

        {/*
       - Footer
    */}
      </Layout>
    )
  }
}

export default IndexPage
