import Collapsible from "../components/Collapsible.jsx"
import SlideShow from "../components/SlideShow.jsx"
import flatCSS from "../css/flat.module.css"
import { CollapsibleHeightProvider } from "../context/index.jsx"
import { getFlat } from "../api/flats.js"
import { useLoaderData } from "react-router-dom"

export const getFlatLoader = async ({ params }) => {
  const flat = await getFlat(params.id).catch((err) => {
    throw new Error(err)
  })
  return flat
}

export default function Flat() {
  const flat = useLoaderData()

  const startsNumber = 5
  const stars = []
  for (let i = 0; i < startsNumber; i++) {
    stars.push(i)
  }

  const flatRating = flat.rating ? parseFloat(flat.rating) : 0

  function createStar(index) {
    return (
      <svg
        key={index}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        xmlns="http://www.w3.org/2000/svg"
        className={flatCSS.star}
      >
        <path
          d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"
          fill={flatRating < index + 1 ? "#E3E3E3" : "#ff6060"}
        />
      </svg>
    )
  }

  return (
    <>
      <main className={flatCSS.main}>
        <section>
          <SlideShow pictures={flat.pictures} />
        </section>
        <section className={flatCSS.flatMainInformation}>
          <div className={flatCSS.flat}>
            <h1 className={flatCSS.title}>{flat.title}</h1>
            <p className={flatCSS.location}>{flat.location}</p>
            <ul className={flatCSS.tags}>
              {flat.tags.length &&
                flat.tags.map((tag, index) => (
                  <span key={index} className={flatCSS.tag}>
                    {tag}
                  </span>
                ))}
            </ul>
          </div>
          <div className={flatCSS.host}>
            <div className={flatCSS.hostProfile}>
              <p className={flatCSS.hostName}>{flat.host.name}</p>
              <img
                src={flat.host.picture}
                alt={flat.host.name}
                className={flatCSS.avatar}
              />
            </div>
            <div className={flatCSS.hostRating}>
              {stars.map((star, index) => createStar(index))}
            </div>
          </div>
        </section>
        <CollapsibleHeightProvider>
          <section className={flatCSS.flatCaracteristics}>
            <Collapsible
              title="Description"
              content={flat.description}
              parentCSS={flatCSS}
              verticalAlign={true}
            />
            <Collapsible
              title="Équipements"
              content={flat.equipments}
              parentCSS={flatCSS}
              verticalAlign={true}
            />
          </section>
        </CollapsibleHeightProvider>
      </main>
    </>
  )
}
