import { useState } from "react";
import EventBanner from './EventBanner.js';
import { eventBannerData, oyData } from "../constants/data.js";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";

function OY() {
  const [showItem, setShowItem] = useState(4);
  let showDroppedItemCount = oyData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[6]}></EventBanner>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>OY 24SS 1차 발매</h2>
            <span className="subTitle">서브 컬쳐 기반 스트릿</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem saleStuff__item--4">
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