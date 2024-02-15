import { useState } from "react";
import EventBanner from './EventBanner.js';
import eventBannerData from '../eventBannerData.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import honeyScoopHouseData from "../honeyScoopHouseData.js";

function HoneyScoopHouse() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = honeyScoopHouseData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[3]}></EventBanner>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>Honey Scoop House</h2>
            <span className="subTitle">다채로운 그래픽 한 스쿱</span>
          </div>
        </div>
        <div className="content-item">
          {
            showDroppedItemCount.map((item, idx) => {
              return <SaleItem item={item} key={idx}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={honeyScoopHouseData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default HoneyScoopHouse;