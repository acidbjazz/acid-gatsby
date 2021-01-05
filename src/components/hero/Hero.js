import React from "react"
import "./Hero.css"

export default ({ className, video }) => {
  return (
    <div className={`hero ${className}`}>
      <video className="hero-video" preload="auto" autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}
