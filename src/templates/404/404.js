import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout/Layout"

export default () => {
  return (
    <Layout type="HMF" title="404: Not found">
      <h1>NOT FOUND</h1>
      <p>
        Back to <Link to="/">home</Link>.
      </p>
    </Layout>
  )
}
