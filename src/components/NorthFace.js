import { useState } from "react";
import EventBanner from './EventBanner.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import { eventBannerData, northFaceData } from "../constants/data.js";

function NorthFace() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = northFaceData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[4]}></EventBanner>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>The North Face</h2>
            <span className="subTitle">트랜드를 넘어 클래식으로</span>
          </div>
        </div>
        <div className="content-item">
          {
            showDroppedItemCount.map((item, idx) => {
              return <SaleItem item={item} key={item.id}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={northFaceData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default NorthFace;