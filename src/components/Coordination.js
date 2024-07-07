import { coordinationData } from "../constants/data";
import UserSlide from "./UserSlide";

function Coordination() {
  return (
    <section>
      <div className="saleStuff coordi">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>행운 가득! 설날 코디 모음</h2>
            <span className="subTitle">#럭키백챌린지</span>
          </div>
        </div>
        <UserSlide data={coordinationData}></UserSlide>
      </div>
    </section>
  )
}

export default Coordination;