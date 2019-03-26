import React from "react"
import Video from "./Video"
import { StaticQuery, graphql } from "gatsby"
import ArrowRight from "../../images/long-arrow-right-light.svg"
import topography from "../../images/topography.svg"
import { GlobalContext } from "../Global/Context"

const Hero = props => {
  return (
    <GlobalContext.Consumer>
      {context => (
        <div className="hero">
          <img src={topography} className="hero__pattern" alt="" />
          <h1 className="hero__title">Learn to Develop Shopify Themes.</h1>
          <h2 className="hero__subtitle">
            Get The Free 5-part Crash Course for Developing Custom Shopify
            Themes.
          </h2>
          <button className="hero__button" onClick={context.handleHeroCta}>
            Sign Up{" "}
            <img src={ArrowRight} className="hero__button-icon" alt="" />
          </button>
        </div>
      )}
    </GlobalContext.Consumer>
  )
}

export default Hero
