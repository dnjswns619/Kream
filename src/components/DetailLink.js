function DetailLink(props) {
  return (
    <div className="detailBtn__wrap">
      <div className="detailBtn__img">
        <picture>
          <source srcSet={process.env.PUBLIC_URL + props.item.src} type={`image/${props.item.type}`}></source>
          <img src={props.detailData.src} alt={props.item.content}></img>
        </picture>
      </div>
      <span className="detailBtn__text">
        {props.item.content}
      </span>
    </div>
  )
}

export default DetailLink;