import React from "react"
import css from "./Main.module.css"

export default ({ children }) => (
  <main className={css.main}>
    <div className={css.mainContent}>{children}</div>
  </main>
)
