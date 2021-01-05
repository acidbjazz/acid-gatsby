import React, { useContext } from "react"
import Alert from "../components/alert/Alert"
import Modal from "../components/modal/Modal"
import { Context } from "../utils/Context"

export default ({ children }) => {
  const { state } = useContext(Context)
  return (
    <>
      {children}
      <div className="portal">
        {state.alert.isAlert && <Alert>{state.alert.alertText}</Alert>}
        <Modal>
          <p>
            También se puede activar/desactivar desde el botón Toggle Modal del
            menú
          </p>
          <p>
            Aparte, se mantiene por encima de la estructura sin volver a
            cargarse, por ejemplo dale play y navega.
          </p>
          <iframe
            title="youtube"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5qap5aO4i9A"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal>
      </div>
    </>
  )
}
