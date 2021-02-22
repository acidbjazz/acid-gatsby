import React, { useContext } from "react"
import { Context } from "../../utils/Context"
import Brand from "../brand/Brand"
import Social from "../social/Social"
import css from "./Footer.module.css"

export default () => {
  const { state } = useContext(Context)
  const social = state.config.social
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <Brand
          className={css.footerBrand}
          type="iso"
          filetype="svg"
          isLink={false}
        />
        <Social className={css.footerSocial} data={social} />
        <div className={css.copy}>©{new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
