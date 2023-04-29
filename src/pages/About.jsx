import Banner from "../components/Banner.jsx"
import bannerImg from "../assets/backgrounds/about_banner.png"
import aboutCSS from "../css/about.module.css"
import Collapsible from "../components/Collapsible.jsx"

export default function About() {
  return (
    <>
      <Banner bannerClass={aboutCSS.bannerDisplay} bannerImg={bannerImg} />
      <main className={aboutCSS.main}>
        <section className={aboutCSS.section}>
          <Collapsible
            titleClass={aboutCSS.collapsileTitle}
            title="Fiabilité"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </section>
      </main>
    </>
  )
}
