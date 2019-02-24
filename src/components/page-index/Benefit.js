import React, { Component } from "react"
const Benefit = ({ number, title, body }) => {
  return (
    <div className="benefit">
      <div className="benefit__number">{number}</div>
      <div className="benefit__content">
        <h3 className="benefit__title">{title}</h3>
        <p className="benefit__body">{body}</p>
      </div>
    </div>
  )
}

export default Benefit
