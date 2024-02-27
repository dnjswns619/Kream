import { useState } from "react";
import EventBanner from './EventBanner.js';
import eventBannerData from '../eventBannerData.js';
import mostPopularData from "../mostPopularData.js";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";

function MostPopular() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = mostPopularData.slice(0, showItem)

  return (
    <section>
      <EventBanner item={eventBannerData[0]}></EventBanner>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>Most Popular</h2>
            <span className="subTitle">발매 상품</span>
          </div>
          <span className="showMore-text">더보기</span>
        </div>
        <div className="content-item">
          {
            showDroppedItemCount.map((item, idx) => {
              return <SaleItem item={item} key={idx}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={mostPopularData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default MostPopular;