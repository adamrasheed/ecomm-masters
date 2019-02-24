import React, { Children } from "react"
const Button = ({ link, children }) => {
  return link ? (
    <a href="" className="button" />
  ) : (
    <button className="button">{children}</button>
  )
}

export default Button
