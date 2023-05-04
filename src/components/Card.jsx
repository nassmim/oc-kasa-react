import { Link } from "react-router-dom"
import cardCSS from "../css/card.module.css"
export default function Card({ id, title, picture }) {
  return (
    <>
      <li
        className={cardCSS.flat}
        style={{ backgroundImage: `url(${picture})` }}
      >
        <Link to={`flat/${id}`} className={cardCSS.flatLink}>
          <h2 className={cardCSS.flatTitle}>{title}</h2>
        </Link>
      </li>
    </>
  )
}
