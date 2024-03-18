import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect, useRef } from "react";
import $ from "jquery";
import {NavLink , Link} from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';
import Event_popup_slider from './event_popup_slider';
import '../../../assets/css/event_sec.css';

export default function Event_ITS() {

    useEffect(() => {

        $('.event_box_home').on("click", function() {
            $('.load-container').hide();
            $('.event_popup').addClass('event_popup_opn');
            $('.event_overlay').show();
            $('body').css('overflow','hidden');
            $('html, body').animate({
                scrollTop: $("#inthespotlight").offset().top
             }, 10);
        });

        $('.ep_cls_btn').on("click", function() {
            $('.event_popup').removeClass('event_popup_opn');
            $('.event_overlay').hide();
            $('body').css('overflow','visible');
            $('html, body').animate({
                scrollTop: $("#inthespotlight").offset().top
             }, 10);
        });

        $("#events_inthespot .ITS_sld a").bind("contextmenu", function(e){
            e.preventDefault(); // Stop right click on link
            return false;
        });
        $('#events_inthespot .ITS_sld a').on('click', function (event) {
            // Check if the Ctrl key is pressed
            if (event.ctrlKey || event.metaKey) {
                // Prevent the default action (opening link in a new tab)
                event.preventDefault();
                // You can add your custom logic here if needed
                console.log('Ctrl + Click disabled');
                $('.event_popup').removeClass('event_popup_opn');
                $('.event_overlay').css('display','none');
                $('body').css('overflow','auto');
            }
          
        });

    });

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?per_page=5"
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
                        <Link to={'event/'+ slug} >
                            <div className='image-conatoner event_box_home'>
                                <div className='img-box'>
                                    <img src={acf.in_thes_potlight_image_home} ></img>
                                </div>
                                <div className='text-box'>
                                
                                    <h2 dangerouslySetInnerHTML={{ __html: title.rendered }}></h2>
                                    <div className='icon-blog'>
                                        <img src={require('../../../assets/img/svg/ITS_calender_icon.svg').default}></img>
                                        <p>{acf.date}</p>
                                    </div>
                                    <hr></hr>
                                    <Link to={'event/'+ slug} className='read_more_btn'>Read More</Link>
                                    {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                </div>
                            </div>
                        </Link>
                    </div>
                </SwiperSlide>
            ))}
            
        </Swiper>

        <a href='/events' className='arrow_btn ITS_lnding_btn'>View All</a>
    </div>

    {/* Popup Div Code */}
    <Event_popup_slider/>
    <div className='event_overlay'></div>

    </>
  )
}
