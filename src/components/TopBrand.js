import { topBrandDetailData } from "../constants/data.js";
import DetailLink from "./DetailLink.js";

function TopBrandLink() {
  return (
    <section>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>Top Brand</h2>
            <span className="subTitle">인기 탑 브랜드</span>
          </div>
        </div>
        <div className="detailBtn">
          {
            topBrandDetailData.map((item, idx) => {
              return (
                <DetailLink item={item} detailData={topBrandDetailData} key={idx}></DetailLink>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default TopBrandLink;