import React, { useRef, useState } from 'react';
import "../../../../assets/css/elsc_mob_swiper.css";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import Bhayala_mob_slider_elsc from '../elsc_parks_slider/bhayala_mob_slider_elsc';

export default function Elsc_mob_bhayala_slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>

    <div className='ncr_mob_sld'>
      
​
      {/* Tabs slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={2.7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='elsc_tab_sld'>
            <a className=''>Bhayala {'(1)'}</a>
          </div>
        </SwiperSlide>
        
      </Swiper>


      {/* Tabs Content */}
      <Swiper
        spaceBetween={10}
        allowTouchMove ={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Bhayala_mob_slider_elsc/>
        </SwiperSlide>

      </Swiper>

      </div>
    </>
  );
}