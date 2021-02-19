import React from "react"
import css from "./Grid.module.css"

export default ({ children, className = null, url = null }) => {
  const _className = className ? ` ${className}` : ""
  return <div className={`${css.grid}${_className}`}>{children}</div>
}
