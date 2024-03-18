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

export default function Blog_ITS() {

    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=5`
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
            spaceBetween={0}
            speed={500}
            loop={true} 
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
                                    <img src={acf.blog_image} alt={acf.blog_image_alt_text}></img>
                                </div>
                                <div className='text-box'>
                                    <p className='new-para blg_cat_name'>{category}</p>
                                    
                                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                    <div className='icon-blog'>
                                        <img src={require('../../../assets/img/svg/ITS_calender_icon.svg').default}></img>
                                        <p>{acf.blog_publish_date}</p>
                                    </div>
                                    <hr></hr>
                                    <a href={'/blog/'+ slug} className='read_more_btn'>Read More</a>
                                    {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                </div>
                            </div>
                        </a>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>

        <a href='/blog' className='arrow_btn ITS_lnding_btn'>View All</a>
    </div>
    </>
  )
}
