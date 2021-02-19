import React from "react"

export default ({ children }) => {
  return (
    <>
      {children}
      <div className="portal"></div>
    </>
  )
}
