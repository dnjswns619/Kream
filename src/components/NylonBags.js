import { useState } from "react";
import EventBanner from './EventBanner.js';
import eventBannerData from '../eventBannerData.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import nylonBagsData from "../nylonBagsData.js";

function NylonBags() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = nylonBagsData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[5]}></EventBanner>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>Nylon Best Bags</h2>
            <span className="subTitle">오래도록 함께할 소재</span>
          </div>
        </div>
        <div className="content-item">
          {
            showDroppedItemCount.map((item) => {
              return <SaleItem item={item} key={item.id}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={nylonBagsData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default NylonBags;