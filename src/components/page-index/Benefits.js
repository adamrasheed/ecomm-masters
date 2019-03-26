import React from "react"
import Benefit from "./Benefit"
import TopographyDark from "../../images/topography-dark.svg"

const Benefits = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-intro">
        <h2 className="benefits-intro__title">
          Get Up to Speed in Shopify Development with this Free 5-Part Crash
          Course
        </h2>
        <p className="benefits-intro__description">
          This self-paced video crash course will show you how to get setup in
          the Shopify platform, quickly setting up your development environment,
          and start developing right away!
        </p>
      </div>
      <div className="benefits">
        <img src={TopographyDark} alt="" className="benefits__pattern" />
        <Benefit
          number="1"
          title="Setting Up Your Shopify Partner Account"
          body="You’ll kick things off by learning how to download and use Shopify’s own theme-scaffolding tool called Slate."
        />
        <Benefit
          number="2"
          title="Setting Up Shopify Slate"
          body="You’ll kick things off by learning how to download and use Shopify’s own theme-scaffolding tool called Slate."
        />
        <Benefit
          number="3"
          title="Creating Your First Product Page"
          body="You’ll kick things off by learning how to download and use Shopify’s own theme-scaffolding tool called Slate."
        />
        <Benefit
          number="4"
          title="Collections Page"
          body="You’ll kick things off by learning how to download and use Shopify’s own theme-scaffolding tool called Slate."
        />
        <Benefit
          number="5"
          title="Publishing Your Theme"
          body="In the last video, you’ll learn how to publish your theme live."
        />
      </div>
    </div>
  )
}

export default Benefits
