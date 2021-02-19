import React from "react"
import ButtonLink from "../../components/button/ButtonLink"
import css from "./Pagination.module.css"

export default ({ url, pagination: { current, total, prev, next } }) => {
  const _prev = prev ? prev : "#"
  const _next = next ? next : "#"
  const _prevDisabled = prev ? "" : " disabled"
  const _nextDisabled = next ? "" : " disabled"
  return (
    <nav className={css.pagination}>
      <ButtonLink
        className={`${css.prev}${_prevDisabled}`}
        icon="navigate_before"
        url={_prev}
      />
      <ButtonLink className={css.home} icon="apps" url={url} />
      <ButtonLink
        className={`${css.next}${_nextDisabled}`}
        icon="navigate_next"
        url={_next}
      />
    </nav>
  )
}
