import eventDetailData from "../eventDetailData.js";
import DetailLink from "./DetailLink.js";

function EventDetailLink() {
  return (
    <div className="detailBtn-wrap">
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