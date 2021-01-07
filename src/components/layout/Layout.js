import React from "react"
import Seo from "../seo/Seo"
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from "../footer/Footer"
import "./Layout.css"

export default ({
  children,
  type,
  className,
  slug = null,
  title = null,
  cover = null,
}) => {
  console.log("hi5 from layout ", type)
  return (
    <>
      <div className={`layout ${type} ${className}`}>
        <Seo slug={slug} title={title} cover={cover} />
        {
          {
            HMF: (
              <>
                <Header />
                <Main children={children} />
                <Footer />
              </>
            ),
            HM: (
              <>
                <Header />
                <Main children={children} />
              </>
            ),
          }[type]
        }
      </div>
    </>
  )
}
