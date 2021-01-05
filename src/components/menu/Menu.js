import React, { useContext } from "react"
import { Link } from "gatsby"
import { Context } from "../../utils/Context"
import { modalShow, modalHide } from "../modal/Modal"
import "./Menu.css"

const Menu = () => {
  const { state, dispatch } = useContext(Context)
  return (
    <div className="menu">
      <button
        className="toggle-menu btn-icon"
        onClick={() => dispatch(menuToggle())}
      >
        <i className="material-icons icon-menu">menu</i>
        <i className="material-icons icon-close">close</i>
      </button>
      <nav className="nav-pages h-list">
        <button
          onClick={() => {
            state.modal.isModal ? dispatch(modalHide()) : dispatch(modalShow())
          }}
        >
          Toggle Modal
        </button>
        <Link to="/" className="nav-item" activeClassName="active">
          Home
        </Link>
        <Link to="/about" className="nav-item" activeClassName="active">
          About
        </Link>
        <Link
          to="/blog"
          className="nav-item"
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent ? { className: "nav-item active" } : null
          }
        >
          Blog
        </Link>
        <Link to="/app" className="nav-item" activeClassName="active">
          App
        </Link>
      </nav>
    </div>
  )
}

const menu = {
  isMenuOpen: false,
}

const menuReducer = (state, action) => {
  switch (action.type) {
    case "MENU_TOGGLE": {
      return { ...state, isMenuOpen: !state.isMenuOpen }
    }
    default:
      return state
  }
}

const menuToggle = () => ({
  type: "MENU_TOGGLE",
})

export { Menu as default, menu, menuReducer, menuToggle }
