import React, { useContext } from "react"
import { Link } from "gatsby"
import { Context } from "../../utils/Context"
import { menuToggle } from "./Actions"
import ButtonToggle from "../../components/button/ButtonToggle"
import ButtonLink from "../../components/button/ButtonLink"
import css from "./Menu.module.css"

export default () => {
  const { state, dispatch } = useContext(Context)
  return (
    <div className={`${css.menu} ${state.menu.isMenuOpen ? css.isOpen : ""}`}>
      <ButtonToggle
        className={css.burguer}
        icons={{ on: "close", off: "menu" }}
        noBG
        fx={active => {
          dispatch(menuToggle(active))
        }}
        init={state.menu.isMenuOpen}
      ></ButtonToggle>
      <nav className={css.navPages}>
        <Link
          to="/"
          className={css.navItem}
          activeClassName={css.active}
          onClick={() => dispatch(menuToggle(false))}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={css.navItem}
          activeClassName={css.active}
          onClick={() => dispatch(menuToggle(false))}
        >
          About
        </Link>
        <Link
          to="/blog"
          className={css.navItem}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent
              ? { className: `${css.navItem} ${css.active}` }
              : null
          }
          onClick={() => dispatch(menuToggle(false))}
        >
          Blog
        </Link>
        <ButtonLink
          className={css.appButton}
          icon="table_view"
          url="/app"
          activeClassName={css.active}
          fx={() => dispatch(menuToggle(false))}
        >
          App
        </ButtonLink>
      </nav>
    </div>
  )
}
