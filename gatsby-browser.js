import React from "react"
import { Provider } from "./src/utils/Context"
import Wrap from "./src/utils/Wrap"
import "./src/utils/Vars.css"
import "./src/utils/Normalizer.css"
import "./src/utils/Bootstrap.css"

export const wrapRootElement = ({ element }) => {
  console.log("root element:", element);
  return <Provider>{element}</Provider>
}

export const wrapPageElement = ({ element, props }) => {
  console.log("page element:", element);
  return <Wrap {...props}>{element}</Wrap>
}
