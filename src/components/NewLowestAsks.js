import { useState } from "react";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import { newLowestAsksData } from "../constants/data.js";

function NewLowestAsks() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = newLowestAsksData.slice(0, showItem);
  return (
    <section>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>New Lowest Asks</h2>
            <span className="subTitle">새로운 즉시 구매가</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem">
          {
            showDroppedItemCount.map((item) => {
              return <SaleItem item={item} key={item.id}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={newLowestAsksData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default NewLowestAsks;