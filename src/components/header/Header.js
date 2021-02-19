import React from "react"
import Brand from "../brand/Brand"
import Menu from "../menu/Menu"
import css from "./Header.module.css"

export default () => {
  return (
    <header className={css.header}>
      <div className={css.headerContent}>
        <Brand type="logo" filetype="svg" isLink={true} />
        <Menu />
      </div>
    </header>
  )
}
