import homeHeroImg from "../assets/backgrounds/home_hero.png"
import home from "../css/home.css"

export default function Home() {
  return (
    <>
      <div
        className={home.hero}
        style={{ backgroundImage: `url(${homeHeroImg})` }}
      >
        Chez vous, partout et ailleurs
      </div>
      <img src={homeHeroImg} alt="" />
    </>
  )
}
