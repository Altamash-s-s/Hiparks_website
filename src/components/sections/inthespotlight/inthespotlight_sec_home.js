import React from 'react'
import '../../../assets/css/inthespotlight_sec_home.css'
import Groundbreaking_event from './event_ITS'
import Case_study_ITS from './case_study_ITS'
import Blog_ITS from './blog_ITS'
import News_ITS from './news_ITS'
import Groundbreaking_hmsld from '../event/groundbreaking_hmsld';
import {NavLink , Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

export default function Inthespotlight_sec_home() {
  return (
    <>
      <div className='news_slider_sec inthe_spotlight_sec'>
            <div>
              <div className='row no_LR_margin'>
                  <div className='col-12'>
                      <p className='section_name news_hd'>HORIZON OF POSSIBILITIES</p>
                      <hr className='add_border new_green_line'/>
                  </div>
              </div>
              <div className='row no_LR_margin'>
                  <div className='col-12'>
                    <h2 class="section_heading inthespot_ttl">In the spotlight</h2>
                  </div>
              </div>

              <div className='row no_LR_margin inthe_spotlight_4cols'>
                <div className='col-12'>
                    <Swiper
                        slidesPerView={2}
                        breakpoints={{
                            320: {
                              slidesPerView: 1
                            },
                            600: {
                              slidesPerView: 2
                            },
                            850: {
                              slidesPerView: 2
                            },
                            1024: {
                              slidesPerView: 3
                            },
                            
                            1440: {
                              slidesPerView: 4
                            },
                          }}
                        spaceBetween={0}
                        speed={500}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                          <Groundbreaking_event/>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                          <Case_study_ITS/>
                        </SwiperSlide>

                        <SwiperSlide>
                          <Blog_ITS/>
                        </SwiperSlide>

                        <SwiperSlide>
                          <News_ITS/>
                        </SwiperSlide>

                    </Swiper>
                </div>
              
                  {/* <div className='col-lg-3 col-md-6 col-12'>
                    <Event_ITS/>
                  </div>
                  <div className='col-lg-3 col-md-6 col-12'>
                    <Case_study_ITS/>
                  </div>
                  <div className='col-lg-3 col-md-6 col-12'>
                    <Blog_ITS/>
                  </div>
                  <div className='col-lg-3 col-md-6 col-12'>
                    <News_ITS/>
                  </div> */}
              </div>


            </div>
      </div>

      {/* Popup Div Code */}
      <Groundbreaking_hmsld/>
      


    </>
  )
}
