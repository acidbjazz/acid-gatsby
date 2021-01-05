import React, { useContext } from "react"
import { Context } from "../../utils/Context"
import styles from "./Modal.module.css"

const Modal = ({ children }) => {
  const { state, dispatch } = useContext(Context)
  return (
    <div className={state.modal.isModal ? styles.modalOpen : styles.modalClose}>
      {!state.modal.isModal && (
        <button
          className={styles.btnOpen}
          onClick={() => dispatch(modalShow())}
        >
          <span className="material-icons">play_arrow</span>
        </button>
      )}
      {state.modal.isModal && (
        <>
          <button
            className={styles.btnClose}
            onClick={() => dispatch(modalHide())}
          >
            <span className="material-icons">close</span>
          </button>
          {children}
        </>
      )}
    </div>
  )
}

const modal = {
  isModal: false,
}

const modalReducer = (state, action) => {
  switch (action.type) {
    case "MODAL_SHOW": {
      return { ...state, isModal: true }
    }
    case "MODAL_HIDE": {
      return { ...state, isModal: false }
    }
    default:
      return state
  }
}

const modalShow = () => ({
  type: "MODAL_SHOW",
})

const modalHide = () => ({
  type: "MODAL_HIDE",
})

export { Modal as default, modal, modalReducer, modalShow, modalHide }
