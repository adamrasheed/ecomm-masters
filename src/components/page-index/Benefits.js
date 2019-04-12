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
          body="You’ll kick things off by learning how to create your own Shopify Partner account so oyu can start developing stores for yourself or clients."
        />
        <Benefit
          number="2"
          title="Setting Up Shopify Slate"
          body="You’ll kick things off by learning how to download and use Shopify’s own theme-scaffolding tool called Slate."
        />
        <Benefit
          number="3"
          title="Developing The Home Page & Product Page"
          body="This lesson will show you develop the home page and product page with Shopify Sections. You'll also learn how you can use Shopify sections to allow your clients to customize what they need without any code."
        />
        <Benefit
          number="4"
          title="Developing The Collections Page"
          body="This lesson with show your how to develop your collections page and add tag filters to let cusotmers easily find the products they're looking for. You'll also learn how to utilize javascript modules available in Slate."
        />
        <Benefit
          number="5"
          title="Developing The Cart Page and Publishing Your Theme"
          body="In this last video, you’ll learn the ins and outs of the cart page and learn how to easily make your theme live."
        />
      </div>
    </div>
  )
}

export default Benefits
