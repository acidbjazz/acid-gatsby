import React from "react"
import css from "./Hero.module.css"

export default ({ children, className = null }) => {
  const _className = className ? ` ${className}` : ""
  return <div className={`${css.hero}${_className}`}>{children}</div>
}
