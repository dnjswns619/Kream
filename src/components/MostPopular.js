import { useState } from "react";
import mostPopularData from "../mostPopularData.js";
import SaleItem from "./SaleItem.js";

function MostPopular() {
  let [getJustDroppedItem, setJustDroppedItem] = useState(5);
  let [getShowMorePushCount, setShowMorePushCount] = useState(0)
  let showDroppedItemCount = [];

  for(let i = 0; i < getJustDroppedItem; i++) {
    showDroppedItemCount.push(mostPopularData[i]);
  }
  return (
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
      <button onClick={(e) => {
        getShowMorePushCount !== 2 ? setShowMorePushCount(getShowMorePushCount + 1) : e.target.remove();
        switch (getShowMorePushCount) {
          case 0:
            setJustDroppedItem(10);
            break;
          case 1: 
            setJustDroppedItem(15);
            break;
          case 2: 
            setJustDroppedItem(20);
            break;
        }
      }} className="showMore-btn">더보기</button>
    </div>
  )
}

export default MostPopular;