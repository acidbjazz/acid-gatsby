// import React, { useContext } from "react"
// import { Context } from "../../utils/Context"
// import "./Alert.css"

// const Alert = ({ children }) => {
//   const { dispatch } = useContext(Context)
//   return (
//     <div className="alert">
//       {children}
//       <button className="btn-close" onClick={() => dispatch(alertHide())}>
//         <span className="material-icons">close</span>
//       </button>
//     </div>
//   )
// }

// const alert = {
//   isAlert: true,
//   alertText: "¡Bienvenido! entrar a /about",
// }

// const alertReducer = (state, action) => {
//   switch (action.type) {
//     case "ALERT_SHOW": {
//       return { ...state, isAlert: true }
//     }
//     case "ALERT_HIDE": {
//       return { ...state, isAlert: false }
//     }
//     case "ALERT_TEXT": {
//       return { ...state, alertText: action.alertText }
//     }
//     default:
//       return state
//   }
// }

// const alertShow = () => ({
//   type: "ALERT_SHOW",
// })

// const alertHide = () => ({
//   type: "ALERT_HIDE",
// })

// const alertText = text => ({
//   type: "ALERT_TEXT",
//   alertText: text,
// })

// export {
//   Alert as default,
//   alert,
//   alertReducer,
//   alertShow,
//   alertHide,
//   alertText,
// }
