import { useRef, useState, useContext, useEffect } from "react"
import { CollapsibleHeightContext } from "../context/index.jsx"
import collapsibleCSS from "../css/collapsible.module.css"

export default function Collapsible({
  title,
  content,
  parentCSS,
  verticalAlign,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const elementRef = useRef(null)
  const {
    collapsibleMinHeight,
    setCollapsibleMinHeight,
    isOpenNumber,
    setIsOpenNumber,
  } = useContext(CollapsibleHeightContext)

  const [openCollapsibleHeight, setOpenCollapsibleHeight] = useState(0)

  useEffect(() => {
    if (verticalAlign) setOpenCollapsibleHeight(elementRef.current.clientHeight)
  }, [isOpen])

  useEffect(() => {
    setIsOpenNumber(isOpen ? isOpenNumber + 1 : Math.max(0, isOpenNumber - 1))
    if (isOpenNumber > 1)
      setCollapsibleMinHeight(
        openCollapsibleHeight > collapsibleMinHeight
          ? openCollapsibleHeight
          : collapsibleMinHeight
      )
    else setCollapsibleMinHeight(openCollapsibleHeight)
  }, [openCollapsibleHeight])

  return (
    <>
      <div className={collapsibleCSS.collapsible}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={[collapsibleCSS.title, parentCSS.collapsibleTitle].join(
            " "
          )}
        >
          {title}
          <svg
            className={isOpen ? collapsibleCSS.arrowUp : ""}
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7897 13.2103C11.4591 13.8797 12.5462 13.8797 13.2157 13.2103L23.4979 2.92804C24.1674 2.25862 24.1674 1.17148 23.4979 0.502064C22.8285 -0.167355 21.7414 -0.167355 21.072 0.502064L12 9.57403L2.92804 0.507419C2.25862 -0.162 1.17148 -0.162 0.502064 0.507419C-0.167355 1.17684 -0.167355 2.26397 0.502064 2.93339L10.7843 13.2157L10.7897 13.2103Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          ref={elementRef}
          className={
            collapsibleCSS.content +
            " " +
            (isOpen
              ? collapsibleCSS.visible + " " + parentCSS.collapsibleContent
              : "")
          }
          style={{ minHeight: isOpen ? collapsibleMinHeight : "0px" }}
        >
          {Array.isArray(content) ? (
            <ul className={parentCSS.collapsibleContentList}>
              {content.map((contentItem, index) => (
                <li key={index}>{contentItem}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      </div>
    </>
  )
}
