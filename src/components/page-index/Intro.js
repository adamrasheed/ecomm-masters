import React from "react"
const Intro = () => {
  return (
    <div className="intro-section">
      <h2 className="intro-section__title">
        Learn how to develop for the most client-friendly eCommerce platform out
        there.
      </h2>
      <div className="intro-section__body">
        <p>So you have a eCommerce project. What platform do you reach for?</p>
        <p>
          <strong>SquareSpace?</strong> Not powerful enough.
        </p>
        <p>
          <strong>WooCommerce or Magento?</strong> You don’t want to spend your
          weekends maintaining the backend.
        </p>
        <p>
          Want a platform powerful enough to be trusted by numerous
          multi-million dollar brands all while being simple enough for your
          clients to easily maintain?
        </p>
        <p>
          <strong>
            Reach for Shopify.{" "}
            <span role="img" aria-label="raised hands">
              🙌
            </span>
          </strong>
        </p>
      </div>
    </div>
  )
}

export default Intro
