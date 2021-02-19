import React from "react"
import { Link } from "gatsby"
import LogoSVG from "../../images/logo.svg"
import IsoSVG from "../../images/logo.svg"
import LogoIMG from "../../images/logo.png"
import IsoIMG from "../../images/logo.png"
import css from "./Brand.module.css"

export default ({ className = null, type, filetype, isLink }) => {
  const _className = className ? ` ${className}` : ""
  const brand = {
    svg:
      type === "logo" ? (
        <LogoSVG className={css.logoSVG} />
      ) : (
        <IsoSVG className={css.isoSVG} />
      ),
    img:
      type === "logo" ? (
        <img className={css.logoIMG} src={LogoIMG} alt="logo" />
      ) : (
        <img className={css.isoIMG} src={IsoIMG} alt="iso" />
      ),
    html:
      type === "logo" ? (
        <div className={css.logoHTML}>logo</div>
      ) : (
        <div className={css.isoHTML}>iso</div>
      ),
  }[filetype]
  return isLink ? (
    <Link className={`${css.brand}${_className}`} to="/">
      {brand}
    </Link>
  ) : (
    <div className={`${css.brand}${_className}`}>{brand}</div>
  )
}
