import React, { useContext } from "react"
import { Context } from "../../utils/Context"
import { useExtractDomain } from "../../utils/Hooks"
import SocialIcon from "../social-icon/SocialIcon"
import "./Social.css"

export default () => {
  const { state } = useContext(Context)
  const social = state.config.social
  return (
    <div className="social">
      {social ? (
        social.nodes.map((item, i) => {
          const domain = useExtractDomain(item.url)
          return <SocialIcon name={domain} url={item.url} key={i} />
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  )
}
