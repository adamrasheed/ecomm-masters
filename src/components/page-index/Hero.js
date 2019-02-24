import React, { Component } from "react"
import Blob1 from "../../images/blob1.svg"
import Blob2 from "../../images/blob2.svg"
import Blob3 from "../../images/blob3.svg"
const Hero = () => {
  return (
    <div className="hero">
      <img src={Blob1} alt="" className="blob blob--1" />
      <img src={Blob2} alt="" className="blob blob--2" />
      <img src={Blob3} alt="" className="blob blob--3" />
      <h1 className="hero__title">Learn to Develop Shopify Themes.</h1>
      <h2 className="hero__subtitle">
        Get The Free 5-part Crash Course on Developing Custom Themes for
        Shopify.
      </h2>
    </div>
  )
}

export default Hero
