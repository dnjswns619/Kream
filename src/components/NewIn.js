import { useState } from "react";
import SaleItem from "./SaleItem.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import { newInData } from "../constants/data.js";

function NewIn() {
  const [showItem, setShowItem] = useState(5);
  let showDroppedItemCount = newInData.slice(0, showItem);
  return (
    <section>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>New In</h2>
            <span className="subTitle">신규 등록 상품</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem">
          {
            showDroppedItemCount.map((item, idx) => {
              return <SaleItem item={item} key={idx}></SaleItem>
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={newInData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default NewIn;