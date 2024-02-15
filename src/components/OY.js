import { useState } from "react";
import EventBanner from './EventBanner.js';
import eventBannerData from '../eventBannerData.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import oyData from "../oyData.js";

function OY() {
  const [showItem, setShowItem] = useState(4);
  let showDroppedItemCount = oyData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[6]}></EventBanner>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>OY 24SS 1차 발매</h2>
            <span className="subTitle">서브 컬쳐 기반 스트릿</span>
          </div>
        </div>
        <div className="content-item showItem-4">
          {
            showDroppedItemCount.map((item) => {
              return <SaleItem item={item} key={item.id}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={oyData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default OY;