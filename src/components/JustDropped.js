import { useState } from "react";
import { justDroppedData } from "../constants/data.js";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";


function JustDropped() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = justDroppedData.slice(0, showItem)
  return (
    <section>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>Just Dropped</h2>
            <span className="subTitle">발매 상품</span>
          </div>
          <span className="showMoreText">더보기</span>
        </div>
        <div className="saleStuff__item saleItem">
          {
            showDroppedItemCount.map((item, idx) => {
              return <SaleItem item={item} key={idx}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={justDroppedData}></ShowMoreBtn>
      </div>
    </section>
  )
}
export default JustDropped;