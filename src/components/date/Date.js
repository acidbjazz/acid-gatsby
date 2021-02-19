import React from "react"
import { useDate } from "../../utils/Hooks"

export default ({ className = null, date }) => {
  const _className = className ? ` ${className}` : ""
  return (
    <time className={`${_className}`} dateTime={date}>
      {useDate(date)}
    </time>
  )
}
