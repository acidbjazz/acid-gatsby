import React from "react"
import Layout from "../../components/layout/Layout"
import Pagination from "../../components/pagination/Pagination"
import { useDate } from "../../utils/Hooks"
import "./BlogPost.css"

export default ({ pageContext }) => {
  const { node, current, total, prev, next } = pageContext
  return (
    <Layout
      type="HMF"
      className="blog-post"
      slug={`/${node.slug}`}
      title={node.titulo}
    >
      <div className="blog-post-content">
        <h1 className="title">{node.titulo}</h1>
        <time>{useDate(node.fecha)}</time>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: node.texto.childMarkdownRemark.html,
          }}
        />
        <Pagination
          current={current}
          total={total}
          prev={prev}
          next={next}
          home="/blog"
        />
      </div>
    </Layout>
  )
}
