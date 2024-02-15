import { useState } from "react";
import upcomingReleaseData from "../upcomingReleaseData";
import Bookmark from "./BookMark.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
import "../css/upcomingRelease.css"
function UpcomingRelease() {
  const [showItem, setShowItem] = useState(4);
  let showDroppedItemCount = upcomingReleaseData.slice(0, showItem);

  const currentDate = new Date();
  return (
    <section>
      <div className="container">
        <div className="content-title">
          <div className="title-wrap">
            <h2>Upcoming Release</h2>
            <span className="subTitle">발매 예정</span>
          </div>
        </div>
        <div className="content-item showItem-4">
          {
            showDroppedItemCount.map((item) => {
              return (
                <div className="item-wrap">
                  <div className={`item-img ${item.brand}`}>
                    <picture>
                      <source srcSet={process.env.PUBLIC_URL + item.src} type={`image/${item.imgType}`}></source>
                      <img src={item.src}></img>
                    </picture>
                    <Bookmark item={item}></Bookmark>

                    <div className="upcomingDate-wrap">
                      <span className="upcomingMonth">{currentDate.getMonth() + 1}월</span>
                      <span className="upcomingDate">{currentDate.getDate() + item.upcomingDate}</span>
                    </div>
                  </div>
                  <div className="item-desc">
                    <div className="brandWrap">
                      <p className="brand">{item.brand}</p>
                    </div>
                    <p className="name">{item.name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <ShowMoreBtn showItem={showItem} setShowItem={setShowItem} data={upcomingReleaseData}></ShowMoreBtn>
      </div>
    </section>
  )
}

export default UpcomingRelease;