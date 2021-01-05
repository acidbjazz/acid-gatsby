import React from "react"
import "./Search.css"

export default () => {
  return (
    <form className="search">
      <div className="search-control">
        <span className="search-icon material-icons">search</span>
        <input
          className="search-input"
          type="search"
          placeholder="BUSCAR"
        ></input>
      </div>
    </form>
  )
}
