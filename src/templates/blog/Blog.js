import React from "react"
import Layout from "../../components/layout/Layout"
import Grid from "../../components/grid/Grid"
import Card from "../../components/card/Card"
import Date from "../../components/date/Date"
import Pagination from "../../components/pagination/Pagination"
import css from "./Blog.module.css"

export default ({ pageContext: { url, nodes, pagination } }) => {
  return (
    <Layout type="HMF" className={css.blog} slug={url} title="Blog">
      <h1>BLOG</h1>
      <Grid>
        {nodes.map((item, i) => (
          <Card url={`${url}/${item.slug}`} key={i}>
            <h2>{item.titulo}</h2>
            <Date date={item.fecha} />
            <div>{item.texto.childMarkdownRemark.excerpt}</div>
          </Card>
        ))}
      </Grid>
      <Pagination url={url} pagination={pagination} />
    </Layout>
  )
}
