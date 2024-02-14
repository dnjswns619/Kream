import { useState } from "react";
import "../css/JustDropped.css"
import justDroppedData from "../justDroppedData.js"
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";


function JustDropped() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = justDroppedData.slice(0, showItem)
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
      <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={justDroppedData}></ShowMoreBtn>
    </div>
  )
}
export default JustDropped;