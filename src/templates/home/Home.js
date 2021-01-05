import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Hero from "../../components/hero/Hero"
// import "./Home.css"

export default ({ pageContext }) => {
  const video = pageContext.video.file.url
  const titulo = pageContext.lastArticle.titulo
  const texto = pageContext.lastArticle.texto.childMarkdownRemark.html
  const slug = pageContext.lastArticle.slug
  return (
    <Layout type="HMF" className="home">
      <Hero className="" video={video} />
      <div className="welcome container tight">
        <h1>{titulo}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: texto,
          }}
        />
        <Link to={`/blog/${slug}`}>Leer más ...</Link>
      </div>
    </Layout>
  )
}
