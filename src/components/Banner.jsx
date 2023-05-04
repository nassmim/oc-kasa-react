import bannerCSS from "../css/banner.module.css"

export default function Banner({ bannerClass, bannerImg, children }) {
  return (
    <>
      <div className={bannerCSS.bannerDisplay + " " + bannerClass}>
        <div className={bannerCSS.bannerBackground}></div>
        <img
          src={bannerImg}
          className={bannerCSS.bannerImg}
          alt="Couverture de la page d'accueil"
        />
        {children}
      </div>
    </>
  )
}
