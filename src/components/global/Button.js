import React from "react"
const Button = ({ link, children }) => {
  return link ? (
    <a href={link} className="button">
      {children}
    </a>
  ) : (
    <button className="button">{children}</button>
  )
}

export default Button
