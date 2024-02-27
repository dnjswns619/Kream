function DetailLink(props) {
  return (
    <div className="detailBtn">
      <div className="detailImg">
        <picture>
          <source srcSet={process.env.PUBLIC_URL + props.item.src} type={`image/${props.item.type}`}></source>
          <img src={props.detailData.src} alt={props.item.content}></img>
        </picture>
      </div>
      <span className="detailText">
        {props.item.content}
      </span>
    </div>
  )
}

export default DetailLink;