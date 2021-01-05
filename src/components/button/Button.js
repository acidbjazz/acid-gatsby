import React from "react"
import css from "./button.module.css"

export default ({ children, className, block, outline }) => {
  const _className = className ? className : ""
  const _block = block ? `${css.block}` : ""
  const _outline = outline ? `${css.outline}` : ""
  return (
    <button className={`${css.btn} ${_className} ${_block} ${_outline}`}>
      {children}
    </button>
  )
}
