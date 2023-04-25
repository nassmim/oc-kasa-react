import { Outlet } from "react-router-dom"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import "./css/reset.css"
import "./css/index.css"

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
