import { useState } from "react";
import { upcomingReleaseData } from "../constants/data.js";
import Bookmark from "./BookMark.js";
import ShowMoreBtn from "./ShowMoreBtn.js";
function UpcomingRelease() {
  const [showItem, setShowItem] = useState(4);
  let showDroppedItemCount = upcomingReleaseData.slice(0, showItem);

  const currentDate = new Date();
  return (
    <section>
      <div className="saleStuff">
        <div className="saleStuff__title">
          <div className="saleStuff__title--wrap">
            <h2>Upcoming Release</h2>
            <span className="subTitle">발매 예정</span>
          </div>
        </div>
        <div className="saleStuff__item saleItem saleStuff__item--4">
          {
            showDroppedItemCount.map((item) => {
              return (
                <div className="saleItem__wrap" key={item.id}>
                  <div className={`saleItem__img ${item.brand}`}>
                    <picture>
                      <source srcSet={process.env.PUBLIC_URL + item.src} type={`image/${item.imgType}`}></source>
                      <img src={item.src}></img>
                    </picture>
                    <Bookmark item={item}></Bookmark>

                    <div className="upComingDate">
                      <span className="upComingDate__month">{currentDate.getMonth() + 1}월</span>
                      <span className="upComingDate__date">{currentDate.getDate() + item.upcomingDate}</span>
                    </div>
                  </div>
                  <div className="saleItem__desc">
                    <div className="brand">
                      <p className="brand__text">{item.brand}</p>
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