import eventDetailData from "../eventDetailData.js";
import "../css/EventDetailLink.css";

function EventDetailLink() {
  return (
    <div className="eventDetailBtn-wrap">
      {
        eventDetailData.map((obj) => {
          return (
            <div className="eventDetailBtn">
              <div className="eventDetailImg">
                <picture>
                  <source srcSet={process.env.PUBLIC_URL + obj.src} type={`image/${obj.type}`}></source>
                  <img src={eventDetailData.src}></img>
                </picture>
              </div>
              <span className="eventDetailText">
                {obj.content}
              </span>
            </div>
          )
        })
      }
    </div>
  )
}

export default EventDetailLink;