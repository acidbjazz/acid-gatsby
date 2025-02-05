import React from "react"
import { useExtractDomain } from "../../utils/Hooks"
import SocialIcon from "../icon/SocialIcon"
import css from "./Social.module.css"

export default ({ className = null, data = null }) => {
  const _className = className ? ` ${className}` : ""
  return (
    <div className={`${css.social}${_className}`}>
      {data ? (
        data.nodes.map((item, i) => {
          const domain = useExtractDomain(item.url)
          return (
            <SocialIcon
              className={css.socialIcon}
              name={domain}
              url={item.url}
              noBG
              key={i}
            />
          )
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  )
}
