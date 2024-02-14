import { useState } from "react";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import weeklyPickData from "../weeklyPickData.js";

function WeeklyPick() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = weeklyPickData.slice(0, showItem);
  return (
    <div className="container">
      <div className="content-title">
        <div className="title-wrap">
          <h2>All About Details</h2>
          <span className="subTitle">이번주 MD의 선택</span>
        </div>
      </div>
      <div className="content-item">
        {
          showDroppedItemCount.map((item, idx) => {
            return <SaleItem item={item} key={idx}></SaleItem>
          })
        }
      </div>
      <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={weeklyPickData}></ShowMoreBtn>
    </div>
  )
}

export default WeeklyPick;