import React from "react"
import Layout from "../../components/layout/Layout"
import Date from "../../components/date/Date"
import Markdown from "../../components/markdown/Markdown"
import Pagination from "../../components/pagination/Pagination"
import css from "./BlogPost.module.css"

export default ({ pageContext: { url, node, pagination } }) => {
  return (
    <Layout
      type="HMF"
      className={css.blogPost}
      slug={`${url}/${node.slug}`}
      title={node.titulo}
    >
      <h1>{node.titulo}</h1>
      <Date date={node.fecha} />
      <Markdown>{node.texto.childMarkdownRemark.html}</Markdown>
      <Pagination url={url} pagination={pagination} />
    </Layout>
  )
}
