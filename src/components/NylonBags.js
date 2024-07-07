import { useState } from "react";
import EventBanner from './EventBanner.js';
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import { eventBannerData, nylonBagsData } from "../constants/data.js";

function NylonBags() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = nylonBagsData.slice(0, showItem);
  return (
    <section>
      <EventBanner item={eventBannerData[5]}></EventBanner>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>Nylon Best Bags</h2>
            <span className="subTitle">오래도록 함께할 소재</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem">
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