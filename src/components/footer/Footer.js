import React from "react"
import Brand from "../brand/Brand"
import Social from "../social/Social"
import "./Footer.css"

export default () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Brand type="logo" filetype="html" isLink={false} />
        <Social />
        <div className="copy">©{new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
