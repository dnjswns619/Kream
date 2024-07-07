function EventBanner(props) {
  return (
    <div className="eventBanner" style={{backgroundColor : props.item.bgColor}}>
      <picture>
        <source srcSet={process.env.PUBLIC_URL + props.item.src} type='image/webp'>
        </source>
        <img src={process.env.PUBLIC_URL + props.item.src} alt={props.item.imgAlt}></img>
      </picture>
    </div>
  )
}

export default EventBanner;