import React, { useContext } from "react"
import { Context } from "../../utils/Context"
import { useResponsive } from "../../utils/Hooks"
import Brand from "../brand/Brand"
import Menu from "../menu/Menu"
import "./Header.css"

export default () => {
  const { state } = useContext(Context)
  const isMobile = useResponsive()
  return (
    <header
      className={state.menu.isMenuOpen ? "header menu-is-open" : "header"}
    >
      <div className="header-content">
        {isMobile ? (
          <Brand type="logo" filetype="svg" isLink={true} />
        ) : (
          <Brand type="logo" filetype="svg" isLink={true} />
        )}
        <Menu />
      </div>
    </header>
  )
}
