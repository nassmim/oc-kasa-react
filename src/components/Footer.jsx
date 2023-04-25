import LogoSVG from "./LogoSVG.jsx"

import footer from "../css/footer.module.css"

export default function Footer() {
  return (
    <footer className={footer.display}>
      <div className={footer.logo}>
        <LogoSVG cssModuleName={footer} />
      </div>
      <p className={footer.copyrights}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
