import React, { useRef, useState } from 'react';
import coordinationData from '../coordinationData.js';
import "../css/UserSlide.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Navigation } from 'swiper/modules';

function UserSlide({data}) {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper userSlide"
      >
        {
          data.map(item => {
            console.log(item)
            return (
              <SwiperSlide>
                <picture>
                  <source srcSet={process.env.PUBLIC_URL + item.coordiImgSrc} type={`image/${item.coordiImgType}`}></source>
                  <img src={process.env.PUBLIC_URL + item.coordiImgSrc}></img>
                </picture>
                <div className='thumbnail'>
                  <picture>
                    {
                      !item.thumbnail ? <source srcSet={`${process.env.PUBLIC_URL}/images/coordiImg/user.jpeg`} type='image/jpeg'></source> :
                      <source srcSet={`${process.env.PUBLIC_URL}/images/coordiImg/user${item.id}.${item.thumbnailType}`} type={`image/${item.thumbnailType}`}></source>
                    }
                    {
                      !item.thumbnail ? <img src={`${process.env.PUBLIC_URL}/images/coordiImg/user.jpeg`}></img> :
                      <img src={`${process.env.PUBLIC_URL}/images/coordiImg/user${item.id}.${item.thumbnailType}`}></img>
                    }
                  </picture>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default UserSlide;