import React, { useState } from 'react';
import { eventData } from '../constants/data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

let activeSlideColor = true;

function SwiperSlider() {
  const [totalEvent] = useState(39);
  const [getCurrentSlide, setCurrentSlide] = useState(0);
  const eventList = [];
  for(let i = 0; i <= totalEvent; i++) {
    eventList.push(i);
  }
  let currentSlide = eventData.find((obj) => {
    return obj.id === getCurrentSlide
  })
  activeSlideColor = currentSlide.activeColor;
  return (
    <section>
      <div className='slider'>
        <Swiper autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }} 
          pagination={{ clickable: true }} 
          loop={true} 
          navigation={true} 
          modules={[Autoplay, Pagination, Navigation]} 
          className={`mySwiper ${activeSlideColor ? "white" : "black"} bannerSlider`}
          onSlideChange={(slide) => {
            setCurrentSlide(slide.realIndex);
          }}
        >
          {
            eventData.map((item, idx) => {
              return (
                <SwiperSlide className={`${item.activeColor}`} style={{backgroundColor : item.bgColor}} key={idx}>
                  <picture>
                    <source srcSet={process.env.PUBLIC_URL + item.src} type='image/webp'>
                    </source>
                    <img src={process.env.PUBLIC_URL + item.src} alt={item.imgAlt}></img>
                  </picture>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  );
}

export default SwiperSlider;