import { useState } from "react";
import EventBanner from './EventBanner.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import { eventBannerData, weeklyPickData } from "../constants/data.js";

function WeeklyPick() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = weeklyPickData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[2]}></EventBanner>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>All About Details</h2>
            <span className="subTitle">이번주 MD의 선택</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem">
          {
            showDroppedItemCount.map((item) => {
              return <SaleItem item={item} key={item.id}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={weeklyPickData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default WeeklyPick;