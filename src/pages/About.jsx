import { CollapsibleHeightProvider } from "../context/index.jsx"
import Banner from "../components/Banner.jsx"
import bannerImg from "../assets/backgrounds/about_banner.png"
import aboutCSS from "../css/about.module.css"
import Collapsible from "../components/Collapsible.jsx"
import aboutSections from "../assets/data/about_sections.json"

export default function About() {
  return (
    <>
      <Banner bannerClass={aboutCSS.bannerDisplay} bannerImg={bannerImg} />

      <main className={aboutCSS.main}>
        <CollapsibleHeightProvider>
          {aboutSections.map((section, index) => (
            <section
              className={aboutCSS.section}
              key={`${section.title}-${index}`}
            >
              <Collapsible
                title={section.title}
                content={section.description}
                parentCSS={aboutCSS}
              />
            </section>
          ))}
        </CollapsibleHeightProvider>
      </main>
    </>
  )
}
