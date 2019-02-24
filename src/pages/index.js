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

class IndexPage extends React.Component {
  scrollTop() {
    console.log("srcolling to top")
  }
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Hero />
        <Intro />
        <BenefitsIntro />
        <Benefits />
        <Button onClick={this.scrollTop}>Back to Top</Button>

        {/*
      - Form
       -Video
       - Intro 
       - Benefits
       - Footer
    */}
      </Layout>
    )
  }
}

export default IndexPage
