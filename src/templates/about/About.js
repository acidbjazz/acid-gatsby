import React from "react"
import Layout from "../../components/layout/Layout"
import Markdown from "../../components/markdown/Markdown"
import css from "./About.module.css"

export default ({ pageContext: { url, data } }) => {
  return (
    <Layout type="HMF" className={css.about} slug={url} title="About">
      <div>
        <h1>About</h1>
        <Markdown>{data.about.texto.childMarkdownRemark.html}</Markdown>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video className="video adjust" preload="auto" controls>
          <source src={data.about.video.file.url} type="video/mp4" />
        </video>
      </div>
    </Layout>
  )
}
