import React from "react"
import css from "./Button.module.css"

export default ({
  children,
  className = null,
  icon = null,
  block = null,
  outline = null,
  noBG = null,
  fx,
}) => {
  const material = typeof icon === "string" ? " material-icons" : ""
  const _className = className ? ` ${className}` : ""
  const _btnIcon = !children ? ` ${css.btnIcon}` : ""
  const _block = block ? ` ${css.block}` : ""
  const _outline = outline ? ` ${css.outline}` : ""
  const _noBG = noBG ? ` ${css.noBG}` : ""

  return (
    <button
      className={`${css.btn}${_btnIcon}${_block}${_outline}${_noBG}${_className}`}
      onClick={fx}
    >
      {icon && <span className={`${css.icon}${material}`}>{icon}</span>}
      {children && <span className={css.label}>{children}</span>}
    </button>
  )
}
