import { useState } from "react";

function SaleItem(props) {
  if(props.item.saleCount >= 10000) {
    
  }
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
        <p className="brand">{props.item.brand}</p>
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
function Bookmark(props) {
  let [getBookmarkState, setBookmarkState] = useState()
  if(!props.item.bookmarkState) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark text-active" viewBox="0 0 16 16" onClick={() => {
        setBookmarkState(props.item.bookmarkState)
        props.item.bookmarkState = !props.item.bookmarkState;
      }}>
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
      </svg>
    )
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16" onClick={() => {
        setBookmarkState(props.item.bookmarkState)
        props.item.bookmarkState = !props.item.bookmarkState;
      }}>
        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
      </svg>
    )
  }
}
export default SaleItem;