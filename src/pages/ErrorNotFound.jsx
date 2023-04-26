import { useRouteError } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import "../css/reset.css"
import "../css/index.css"
import "../css/errorNotFound.css"

export default function ErrorNotFound() {
  const error = useRouteError()

  return (
    <>
      <Header />
      <div className="error">
        <h1 className="error__title">Ooops</h1>
        <p className="error__subtitle">
          <i>Désolé il y a eu un souci : </i>
        </p>
        <p className="error__message">{error.statusText || error.message}</p>
      </div>
      <Footer />
    </>
  )
}
