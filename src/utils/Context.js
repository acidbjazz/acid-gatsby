import React, { useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { menu, menuReducer } from "../components/menu/Actions"

export const Context = React.createContext()

const config = {
  breakpoint: 900,
}

const configReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const global = { config, menu }

const reducer = (global, action) => ({
  config: configReducer(global.config, action),
  menu: menuReducer(global.menu, action),
})

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, global)
  const remoteData = useStaticQuery(graphql`
    query socialQuery {
      allContentfulSocial {
        nodes {
          url
        }
      }
    }
  `)
  config.social = remoteData.allContentfulSocial
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
