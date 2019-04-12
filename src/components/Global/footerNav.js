import React from "react"
import { Link } from "gatsby"
const FooterNav = () => {
  return (
    <nav className="footer__nav">
      <Link
        className="footer-nav__link"
        activeClassName="footer-nav__link--active"
        to="/"
      >
        Home
      </Link>
      {/* 
      <Link
      className="footer-nav__link"
      activeClassName="footer-nav__link--active"
      to="/about"
      >
      About
      </Link>
    */}
    </nav>
  )
}

export default FooterNav
