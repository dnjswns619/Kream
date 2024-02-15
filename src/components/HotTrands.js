import hotTrandsData from "../hotTrandsData";
import UserSlide from "./UserSlide";

function HotTrands() {
  return (
    <section>
      <div className="container trandWrwap">
        <div className="content-title">
          <div className="title-wrap">
            <h2>행운 가득! 설날 코디 모음</h2>
          </div>
        </div>
        <UserSlide data={hotTrandsData}></UserSlide>
      </div>
    </section>
  )
}

export default HotTrands;