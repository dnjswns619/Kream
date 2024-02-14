import { useState } from "react";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import newLowestAsksData from "../newLowestAsksData.js";

function NewLowestAsks() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = newLowestAsksData.slice(0, showItem);
  return (
    <div className="container">
      <div className="content-title">
        <div className="title-wrap">
          <h2>New Lowest Asks</h2>
          <span className="subTitle">새로운 즉시 구매가</span>
        </div>
      </div>
      <div className="content-item">
        {
          showDroppedItemCount.map((item) => {
            return <SaleItem item={item} key={item.id}></SaleItem>
          })
        }
      </div>
      <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={newLowestAsksData}></ShowMoreBtn>
    </div>
  )
}

export default NewLowestAsks;