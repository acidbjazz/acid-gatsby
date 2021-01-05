import React from "react"
import { Link } from "gatsby"
import "./Pagination.css"

export default ({ current, total, prev, next, home }) => {
  return (
    <nav className="pagination">
      {prev && (
        <Link className="prev" to={prev}>
          <span className="material-icons">navigate_before</span>
        </Link>
      )}
      {home === "/" && current !== 1 && (
        <Link className="home" to={home}>
          <span className="material-icons">home</span>
        </Link>
      )}
      {home !== "/" && (
        <Link className="home" to={home}>
          <span className="material-icons">apps</span>
        </Link>
      )}
      {next && (
        <Link className="next" to={next}>
          <span className="material-icons">navigate_next</span>
        </Link>
      )}
    </nav>
  )
}
