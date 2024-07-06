import React from 'react';
import "../css/UserSlide.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

function UserSlide({data}) {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={5}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper userSlide"
    >
      {
        data.map(item => {
          return (
            <SwiperSlide key={item.id}>
              <picture>
                <source srcSet={process.env.PUBLIC_URL + item.coordiImgSrc} type={`image/${item.coordiImgType}`}></source>
                <img src={process.env.PUBLIC_URL + item.coordiImgSrc}></img>
              </picture>
              <div className='thumbnail'>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + item.thumbnailSrc} type={`image/${item.thumbnailType}`}></source>
                    <img src={process.env.PUBLIC_URL + item.thumbnailSrc}></img>
                </picture>
              </div>
              <span className='userId'>@{item.userId}</span>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default UserSlide;