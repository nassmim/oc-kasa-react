import "../css/banner.css"

export default function Banner({ bannerClass, bannerImg, children }) {
  return (
    <>
      <div
        className={"bannerDisplay" + " " + bannerClass}
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="bannerBackground"></div>
        {children}
      </div>
    </>
  )
}
