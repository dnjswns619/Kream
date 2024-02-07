import { useState } from "react";
import "../css/JustDropped.css"
import justDroppedData from "../justDroppedData.js"
import SaleItem from "./SaleItem.js";


function JustDropped() {
  let [getJustDroppedItem, setJustDroppedItem] = useState(5);
  let [getShowMorePushCount, setShowMorePushCount] = useState(0)
  let showDroppedItemCount = [];

  for(let i = 0; i < getJustDroppedItem; i++) {
    showDroppedItemCount.push(justDroppedData[i]);
  }
  return (
    <div className="container">
      <div className="content-title">
        <div className="title-wrap">
          <h2>Just Dropped</h2>
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
        getShowMorePushCount !== 1 ? setShowMorePushCount(getShowMorePushCount + 1) : e.target.remove();
        switch (getShowMorePushCount) {
          case 0:
            setJustDroppedItem(10);
            break;
          case 1: 
            setJustDroppedItem(15);
            break;
        }
      }} className="showMore-btn">더보기</button>
    </div>
  )
}
export default JustDropped;