function EventBanner(props) {
  return (
    <div className="bannerWrap" style={{backgroundColor : props.item.bgColor}}>
      <picture>
        <source srcSet={process.env.PUBLIC_URL + props.item.src} type='image/webp'>
        </source>
        <img src={process.env.PUBLIC_URL + props.item.src}></img>
      </picture>
    </div>
  )
}

export default EventBanner;