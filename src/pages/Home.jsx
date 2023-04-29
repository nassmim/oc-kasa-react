import { useLoaderData, Link, useNavigation } from "react-router-dom"
import { getFlats } from "../api/flats.js"
import bannerImg from "../assets/backgrounds/home_banner.png"
import home from "../css/home.module.css"
import Banner from "../components/Banner.jsx"

export async function getFlatsLoader() {
  const flats = await getFlats().catch((err) => {
    throw new Error(err)
  })
  return flats
}

export default function Home() {
  const flats = useLoaderData()
  const navigation = useNavigation()

  return (
    <>
      <Banner bannerImg={bannerImg}>
        <h1 className="title">Chez vous, partout et ailleurs</h1>
      </Banner>

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
