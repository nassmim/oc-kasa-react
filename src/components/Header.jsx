import header from "../css/header.module.css"

import { NavLink, Link } from "react-router-dom"
import LogoSVG from "./LogoSVG.jsx"

export default function Header() {
  const isNavLinkActive = (isActive, isPending) => {
    return isActive ? header.activeLink : ""
  }

  return (
    <>
      <header className={header.display}>
        <Link to="/" className={header.logo}>
          <LogoSVG cssModuleName={header} />
        </Link>

        <nav className={header.menu}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isNavLinkActive(isActive, isPending) + " " + header.link
            }
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isNavLinkActive(isActive, isPending) + " " + header.link
            }
          >
            À propos
          </NavLink>
        </nav>
      </header>
    </>
  )
}
