function DetailLink(props) {
  return (
    <div className="eventDetailBtn">
      <div className="eventDetailImg">
        <picture>
          <source srcSet={process.env.PUBLIC_URL + props.item.src} type={`image/${props.item.type}`}></source>
          <img src={props.detailData.src}></img>
        </picture>
      </div>
      <span className="eventDetailText">
        {props.item.content}
      </span>
    </div>
  )
}

export default DetailLink;