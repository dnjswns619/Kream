import { hotTrandsData } from "../constants/data";
import UserSlide from "./UserSlide";

function HotTrands() {
  return (
    <section>
      <div className="saleStuff trandWrwap">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>행운 가득! 설날 코디 모음</h2>
          </div>
        </div>
        <UserSlide data={hotTrandsData}></UserSlide>
      </div>
    </section>
  )
}

export default HotTrands;