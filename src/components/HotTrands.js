import hotTrandsData from "../hotTrandsData";
import UserSlide from "./UserSlide";

function HotTrands() {
  return (
    <div className="container coordiWrap">
      <div className="content-title">
        <div className="title-wrap">
          <h2>행운 가득! 설날 코디 모음</h2>
        </div>
      </div>
      <UserSlide data={hotTrandsData}></UserSlide>
    </div>
  )
}

export default HotTrands;