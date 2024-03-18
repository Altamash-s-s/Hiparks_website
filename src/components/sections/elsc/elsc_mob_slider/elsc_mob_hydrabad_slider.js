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

import Kothur_mob_slider_elsc from '../elsc_parks_slider/kothur_mob_slider_elsc';
import Patancheru_mob_slider_elsc from '../elsc_parks_slider/patancheru_mob_slider_elsc';

export default function Elsc_mob_hydrabad_slider() {
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
            <a className=''>Kothur {'(6)'}</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='elsc_tab_sld'>
            <a className=''>Patancheru {'(2)'}</a>
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
          <Kothur_mob_slider_elsc/>
        </SwiperSlide>

        <SwiperSlide>
          <Patancheru_mob_slider_elsc/>
        </SwiperSlide>

 

        

      </Swiper>

      </div>
    </>
  );
}