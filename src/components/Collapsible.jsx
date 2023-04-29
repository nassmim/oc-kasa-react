import collapsibleCSS from "../css/collapsible.module.css"

export default function Collapsible({ title, description, titleClass }) {
  return (
    <>
      <div className={[collapsibleCSS.title, titleClass].join(" ")}>
        {title}
      </div>
      <div className={collapsibleCSS.description}>{description}</div>
    </>
  )
}
