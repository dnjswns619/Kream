import { useState } from "react";
import Bookmark from "./BookMark.js";

function SaleItem(props) {
  return (
    <div className="item-wrap">
      <div className={`item-img ${props.item.brand}`}>
        <picture>
          <source srcSet={process.env.PUBLIC_URL + props.item.src} type={`image/${props.item.imgType}`}></source>
          <img src={props.item.src}></img>
        </picture>
        <Bookmark item={props.item}></Bookmark>
        
        <span className="saleCount">
            {
              props.item.saleCount === 0 ? null :
              props.item.saleCount >= 10000 ? `거래 ${(props.item.saleCount / 10000)}만` :
              props.item.saleCount >= 1000 ? `거래 ${props.item.saleCount.toLocaleString()}` :
              props.item.saleCount < 1000 ? `거래 ${props.item.saleCount}` : null
            }
          </span>
      </div>
      <div className="item-desc">
        <div className="brandWrap">
          <p className="brand">{props.item.brand}</p>
          {
            props.item.brandOfficial ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#7c72ee" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg> : null
          }
        </div>
        <p className="name">{props.item.name}</p>
        <div className="price-wrap">
          <span className="price">{props.item.price}원</span>
          <span className="saleType">
            {
              props.item.saleType ? "즉시 구매가" : "구매가"
            }
          </span>
        </div>
      </div>
    </div>
  )
}

export default SaleItem;