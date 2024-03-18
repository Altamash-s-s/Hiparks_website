import React from 'react'
import useFetch from "react-fetch-hook";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

export default function Press_rels_slider() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/press_release"
    );

    const press_rls = {
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  
                }
            },
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  
                }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                infinite: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
            
    };

      
  return (
    <>
        <div>
          
            <Swiper
                slidesPerView={4}
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
                className="mySwiper news_slider"
            >
                {data && data.map(({ id ,title , acf , slug}) => ( 
                    <SwiperSlide>
                        <div className='news_sld'  key={id}>
                          <a href={"/press_release/" + slug}>
                          <div className='news_content'>
                              <div className='news_inner_dv'>
                            
                                  {/* <p className='news_desc'>{title.rendered}</p> */}
                                  <p className='news_desc' dangerouslySetInnerHTML={{ __html: title.rendered }}></p>
                                  
                              </div>
                              <div className='news_date_box'>
                                  <p className='nws_date'>{acf.publish_date}</p>
                                  <p className='news_year'>{acf.publish_month} {acf.publish_year}</p>
                              </div> 
                              <div className='news_overlay'>
                                  <img src={acf.pr_image}></img>
                              </div>
                          </div>
                          </a>
                        </div>
                    </SwiperSlide>
                  ))} 

            </Swiper>


        </div>
    </>
  )
}
