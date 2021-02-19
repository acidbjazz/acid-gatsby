import React, { useContext } from "react"
import { Context } from "../../utils/Context"
import { useExtractDomain } from "../../utils/Hooks"
import SocialIcon from "../icon/SocialIcon"
import css from "./Social.module.css"

export default ({ className = null }) => {
  const { state } = useContext(Context)
  const social = state.config.social
  const _className = className ? ` ${className}` : ""
  return (
    <div className={`${css.social}${_className}`}>
      {social ? (
        social.nodes.map((item, i) => {
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
