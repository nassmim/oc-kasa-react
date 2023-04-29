import { Link, useRouteError } from "react-router-dom"

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

import "../css/reset.css"
import "../css/index.css"
import errorCSS from "../css/errorNotFound.module.css"

export default function ErrorNotFound() {
  const error = useRouteError()

  return (
    <>
      <Header />
      <main className={errorCSS.error}>
        <section className={errorCSS.information}>
          <h1 className={errorCSS.title}>404</h1>
          <p className={errorCSS.message}>
            Oups! La page que vous demandez n'existe pas.
          </p>
        </section>
        <Link to="/" className={errorCSS.link}>
          Retourner sur la page d’accueil
        </Link>
      </main>
      <Footer />
    </>
  )
}
