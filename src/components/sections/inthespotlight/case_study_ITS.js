import React from 'react'
import useFetch from "react-fetch-hook";


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

export default function Case_study_ITS() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories?per_page=5"
    );

  return (
    <>
    <div className='ITS_slider_sec'>
        <Swiper
            slidesPerView={2.3}
            breakpoints={{
                320: {
                slidesPerView: 1.1
                },
                767: {
                slidesPerView: 2.1
                },
                850: {
                slidesPerView: 2
                },
                1024: {
                slidesPerView: 2.2
                },
                1440: {
                slidesPerView: 2.3
                },
            }}
            spaceBetween= {0}
            loop={true} 
            speed={500}
            loopedSlides = {5}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper news_slider ITS_slider_dv"
        >

            {data && data.map(({ id, acf, title, category, slug, content }) => (
                <SwiperSlide>
                    <div className='ITS_sld' key={id}>
                        <a >
                            <div className='image-conatoner'>
                                <div className='img-box'>
                                    <img src={acf.client_stories_image} ></img>
                                </div>
                                <div className='text-box'>
                                
                                    <h2 dangerouslySetInnerHTML={{ __html: title.rendered }}></h2>
                                    <div className='icon-blog'>
                                        <img src={require('../../../assets/img/svg/ITS_calender_icon.svg').default}></img>
                                        <p>{acf.short_date}</p>
                                    </div>
                                    <hr></hr>
                                    <a href={'/case-studies/'+ slug} className='read_more_btn'>Read More</a>
                                    {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>

        <a href='/case-studies' className='arrow_btn ITS_lnding_btn'>View All</a>
    </div>
    </>
  )
}
