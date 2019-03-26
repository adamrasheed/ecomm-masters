import React from "react"
const Button = ({ link, children, ...props }) => {
  return link ? (
    <a href={link} className="button">
      {children}
    </a>
  ) : (
    <button {...props} className="button">
      {children}
    </button>
  )
}

export default Button
