import homeHeroImg from "../assets/backgrounds/home_hero.png"
import home from "../css/home.module.css"

export default function Home() {
  return (
    <>
      <div
        className={home.hero}
        style={{
          backgroundImage: `url(${homeHeroImg})`,
        }}
      >
        <div className={home.background}></div>
        <h1 className={home.title}>Chez vous, partout et ailleurs</h1>
      </div>
    </>
  )
}
