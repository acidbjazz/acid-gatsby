import React, { useContext, useEffect } from "react"
import { Context } from "../../utils/Context"
import Layout from "../../components/layout/Layout"
import { alertText } from "../../components/alert/Alert"
// import "./About.css"

export default ({ pageContext }) => {
  const video = pageContext.about.video.file.url
  const texto = pageContext.about.texto.childMarkdownRemark.html
  const { dispatch } = useContext(Context)
  useEffect(() => {
    dispatch(alertText("Cambió la alerta"))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout type="HMF" className="about" slug="/about" title="About">
      <div className="welcome">
        <h1>About</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: texto,
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="video adjust" preload="auto" controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Layout>
  )
}
