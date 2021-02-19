import React from "react"
import Brand from "../brand/Brand"
import Social from "../social/Social"
import css from "./Footer.module.css"

export default () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContent}>
        <Brand
          className={css.footerBrand}
          type="iso"
          filetype="svg"
          isLink={false}
        />
        <Social className={css.footerSocial} />
        <div className={css.copy}>©{new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
