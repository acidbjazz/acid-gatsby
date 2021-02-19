import React from "react"
import { Link } from "gatsby"
import css from "./button.module.css"

export default ({
  children,
  className = null,
  icon = null,
  block = null,
  outline = null,
  noBG = null,
  url = "#",
  activeClassName = null,
  external = null,
  fx,
}) => {
  const material = typeof icon === "string" ? " material-icons" : ""
  const _className = className ? ` ${className}` : ""
  const _btnIcon = !children ? ` ${css.btnIcon}` : ""
  const _block = block ? ` ${css.block}` : ""
  const _outline = outline ? ` ${css.outline}` : ""
  const _noBG = noBG ? ` ${css.noBG}` : ""
  return external ? (
    <a
      className={`${css.btnLink}${_btnIcon}${_block}${_outline}${_noBG}${_className}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {icon && <span className={`${css.icon}${material}`}>{icon}</span>}
      {children && <span className={css.label}>{children}</span>}
    </a>
  ) : (
    <Link
      className={`${css.btnLink}${_btnIcon}${_block}${_outline}${_noBG}${_className}`}
      to={url}
      activeClassName={activeClassName}
      onClick={fx}
    >
      {icon && <span className={`${css.icon}${material}`}>{icon}</span>}
      {children && <span className={css.label}>{children}</span>}
    </Link>
  )
}
