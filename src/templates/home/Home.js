import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/hero/Hero"
import Markdown from "../../components/markdown/Markdown"
import css from "./Home.module.css"

export default ({ pageContext: { url, data } }) => {
  console.log("data:", data)
  return (
    <Layout type="HMF" className={css.home}>
      <Hero className={css.homeHero}>
        <video className={css.homeVideo} preload="auto" autoPlay muted loop>
          <source src={data.video.file.url} type="video/mp4" />
        </video>
      </Hero>
      <div>
        <h1>{data.lastArticle.titulo}</h1>
        <Markdown>{data.lastArticle.texto.childMarkdownRemark.html}</Markdown>
        <Link to={`/blog/${data.lastArticle.slug}`}>Leer más ...</Link>
      </div>
    </Layout>
  )
}
