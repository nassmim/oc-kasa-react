import "../css/banner.css"

export default function Banner({ bannerImg, children }) {
  return (
    <>
      <div
        className="bannerDisplay"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="bannerBackground"></div>
        {children}
      </div>
    </>
  )
}
