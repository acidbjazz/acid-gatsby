import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/Layout"
import Pagination from "../../components/pagination/Pagination"
import { useDate } from "../../utils/Hooks"
import "./Blog.css"

export default ({ pageContext }) => {
  const { nodes, current, total, prev, next } = pageContext
  return (
    <Layout type="HMF" className="blog" slug="/blog" title="Blog">
      <h1>BLOG</h1>
      <div className="cards">
        {nodes.map((item, i) => (
          <Link className="card" to={`/blog/${item.slug}`} key={i}>
            <h1 className="title">{item.titulo}</h1>
            <time>{useDate(item.fecha)}</time>
            <div className="excerpt">
              {item.texto.childMarkdownRemark.excerpt}
            </div>
          </Link>
        ))}
        <Pagination
          current={current}
          total={total}
          prev={prev}
          next={next}
          home="/"
        />
      </div>
    </Layout>
  )
}
