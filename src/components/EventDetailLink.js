import { eventDetailData } from "../constants/data.js";
import DetailLink from "./DetailLink.js";

function EventDetailLink() {
  return (
    <section>
      <div className="detailBtn">
        {
          eventDetailData.map((item, idx) => {
            return (
              <DetailLink item={item} detailData={eventDetailData} key={idx}></DetailLink>
            )
          })
        }
      </div>
    </section>
  )
}

export default EventDetailLink;