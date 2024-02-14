import { useState } from "react";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import newHighestBidsData from "../newHighestBidsData.js";

function NewHighestBids() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = newHighestBidsData.slice(0, showItem);
  return (
    <div className="container">
      <div className="content-title">
        <div className="title-wrap">
          <h2>New Lowest Asks</h2>
          <span className="subTitle">새로운 즉시 판매가</span>
        </div>
      </div>
      <div className="content-item">
        {
          showDroppedItemCount.map((item) => {
            return <SaleItem item={item} key={item.id}></SaleItem>
          })
        }
      </div>
      <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={newHighestBidsData}></ShowMoreBtn>
    </div>
  )
}

export default NewHighestBids;