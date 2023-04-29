import { useLoaderData, Link, useNavigation } from "react-router-dom"
import { getFlats } from "../api/flats.js"
import bannerImg from "../assets/backgrounds/home_banner.png"
import homeCSS from "../css/home.module.css"
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
      <Banner bannerClass={homeCSS.bannerDisplay} bannerImg={bannerImg}>
        <h1 className="title">Chez vous, partout et ailleurs</h1>
      </Banner>

      <main
        className={
          homeCSS.main + " " + (navigation.state === "loading" ? "loading" : "")
        }
      >
        {flats && flats.length && (
          <>
            <ul className={homeCSS.flats}>
              {flats.map((flat) => (
                <li
                  key={flat.id}
                  className={homeCSS.flat}
                  style={{ backgroundImage: `url(${flat.pictures[0]})` }}
                >
                  <Link to={`flat/${flat.id}`} className={homeCSS.flatLink}>
                    <h2 className={homeCSS.flatTitle}>{flat.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </>
  )
}
