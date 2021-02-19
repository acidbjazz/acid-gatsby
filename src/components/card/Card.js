import React from "react"
import { Link } from "gatsby"
import css from "./Card.module.css"

export default ({ children, className = null, url = null }) => {
  const _className = className ? ` ${className}` : ""
  return (
    <Link className={`${css.card}${_className}`} to={url}>
      {children}
    </Link>
  )
}
