import React from "react"
import Seo from "../../utils/Seo"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from "../footer/Footer"
import css from "./Layout.module.css"

export default ({
  children,
  type,
  className,
  slug = null,
  title = null,
  cover = null,
}) => {
  return (
    <div className={`${css.layout} ${type} ${className}`}>
      <Seo slug={slug} title={title} cover={cover} />
      {
        {
          M: (
            <>
              <Main children={children} />
            </>
          ),
          HM: (
            <>
              <Header />
              <Main children={children} />
            </>
          ),
          HMF: (
            <>
              <Header />
              <Main children={children} />
              <Footer />
            </>
          ),
        }[type]
      }
    </div>
  )
}
