import { useLoaderData, Link, useNavigation } from "react-router-dom"
import { getFlats } from "../api/flats.js"
import homeHeroImg from "../assets/backgrounds/home_hero.png"
import home from "../css/home.module.css"
import { useEffect } from "react"

export async function getFlatsLoader() {
  const flats = await getFlats().catch((err) => {
    throw new Error(err)
  })
  return flats
}

export default function Home() {
  const flats = useLoaderData()
  const navigation = useNavigation()

  useEffect(() => {
    console.log(navigation.state)
  }, [navigation])
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

      <section
        className={
          home.gallery + " " + navigation.state === "loading" ? "loading" : ""
        }
      >
        {flats && flats.length && (
          <>
            <ul className={home.flats}>
              {flats.map((flat) => (
                <li
                  key={flat.id}
                  className={home.flat}
                  style={{ backgroundImage: `url(${flat.pictures[0]})` }}
                >
                  <Link to={`flat/${flat.id}`} className={home.flatLink}>
                    <h2 className={home.flatTitle}>{flat.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  )
}
