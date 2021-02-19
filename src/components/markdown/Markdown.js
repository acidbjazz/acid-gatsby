import React from "react"
import css from "./Markdown.module.css"

export default ({ className, children }) => {
  const _className = className ? className : ""
  return (
    <div
      className={`${css.md} ${_className}`}
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    />
  )
}
