import { useRef, useState } from "react"
import slideShowCSS from "../css/slideshow.module.css"
import arrowLeft from "../assets/left_arrow.png"
import arrowRight from "../assets/right_arrow.png"

export default function SlideShow({ pictures }) {
  const picturesLength = pictures.length
  const [slideIndex, setSlideIndex] = useState(0)
  const goToPreviousSlide = () => {
    const isFirstSlide = slideIndex === 0
    const newSlideIndex = isFirstSlide ? picturesLength - 1 : slideIndex - 1
    setSlideIndex(newSlideIndex)
  }
  const goToNextSlide = () => {
    const isLastSlide = slideIndex === picturesLength - 1
    const newSlideIndex = isLastSlide ? 0 : slideIndex + 1
    setSlideIndex(newSlideIndex)
  }
  return (
    <>
      <div className={slideShowCSS.slideshow}>
        <img
          src={arrowLeft}
          alt="Slide Précédente"
          className={slideShowCSS.arrow + " " + slideShowCSS.left}
          onClick={goToPreviousSlide}
        />
        <div
          className={slideShowCSS.slide}
          style={{ backgroundImage: `url(${pictures[slideIndex]})` }}
        ></div>
        <img
          src={arrowRight}
          alt="Slide Suivante"
          className={slideShowCSS.arrow + " " + slideShowCSS.right}
          onClick={goToNextSlide}
        />
        <p className={slideShowCSS.pictureNumber}>
          {slideIndex + 1}/{picturesLength}
        </p>
      </div>
    </>
  )
}
