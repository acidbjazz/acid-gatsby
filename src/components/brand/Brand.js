/**
 * @class Brand
 * This class define the multiples assets for logo
 *
 * @option type: String = undefined ("logo", "iso")
 * @option filetype: String = undefined ("svg", "img", "html")
 * @option isLink: Boolean = undefined
 */

import React from "react"
import { Link } from "gatsby"
import LogoSVG from "../../images/logo.svg"
import IsoSVG from "../../images/logo.svg"
import LogoIMG from "../../images/logo.png"
import IsoIMG from "../../images/logo.png"
import "./Brand.css"

export default ({ type, filetype, isLink }) => {
  const brand = {
    svg:
      type === "logo" ? (
        <LogoSVG className="logo-svg" />
      ) : (
        <IsoSVG className="iso-svg" />
      ),
    img:
      type === "logo" ? (
        <img className="logo-img" src={LogoIMG} alt="logo" />
      ) : (
        <img className="iso-img" src={IsoIMG} alt="iso" />
      ),
    html:
      type === "logo" ? (
        <div className="logo-html">
          <div className="logo-html-text">logo</div>
        </div>
      ) : (
        <div className="iso-text">logo</div>
      ),
  }[filetype]
  return isLink ? (
    <Link className="brand" to="/">
      {brand}
    </Link>
  ) : (
    <div className="brand">{brand}</div>
  )
}
