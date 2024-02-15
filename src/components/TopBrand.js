import topBrandDetailData from "../topBrandData.js";
import DetailLink from "./DetailLink.js";

function TopBrandLink() {
  return (
    <section>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>Top Brand</h2>
            <span className="subTitle">인기 탑 브랜드</span>
          </div>
        </div>
        <div className="detailBtn-wrap">
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