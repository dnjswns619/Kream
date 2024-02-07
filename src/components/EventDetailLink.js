import eventDetailData from "../eventDetailData.js";
import "../css/EventDetailLink.css";
import DetailLink from "./DetailLink.js";

function EventDetailLink() {
  return (
    <div className="eventDetailBtn-wrap">
      {
        eventDetailData.map((item, idx) => {
          return (
            <DetailLink item={item} detailData={eventDetailData} key={idx}></DetailLink>
          )
        })
      }
    </div>
  )
}

export default EventDetailLink;