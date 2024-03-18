import React from 'react'
import {NavLink , Link , useParams} from "react-router-dom";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/event_sec.css';
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import $ from "jquery";

export default function Event_popup_slider() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events/?slug=${slug}`
    );

    const event_img_slider = {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500
    };

    useEffect(() => {

        // $('.event_box').on("click", function() {
        //     $('.load-container').hide();
        //     $('.event_popup').addClass('event_popup_opn');
        //     // $('.lightbox_overlay').addClass('overlay_open');
        //     $('body').css('overflow','hidden');
        //     $('html, body').animate({
        //         scrollTop: $("#event_sec").offset().top
        //      }, 100);  
        // });
        

        // $('.ep_cls_btn').on("click", function() {
        //     $('.event_popup').removeClass('event_popup_opn');
        //     // $('.lightbox_overlay').removeClass('overlay_open');
        //     $('body').css('overflow','visible');
        //     $('html, body').animate({
        //         scrollTop: $("#event_sec").offset().top
        //      }, 100);
        // });
        
    })

  return (
    <>
       <div className='event_popup'>
            <Link to={{pathname: '/?', hash: '#inthespotlight'}} >
                <img className='ep_cls_btn' src={require('../../../assets/img/svg/close_icon_wht.svg').default}></img>
            </Link>
            {data && data.map(({ id , acf , title , content , event_year}) => (                     
                <div>
                    <h3 className='event_hd_inside' dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>  
                    <Slider {...event_img_slider} className='park_lightbox_photo event_img_sld'>

                        {acf.youtube_video_filed.map(event_ytb_video =>
                            <div className='lb_prk_sld' key={id}>
                                <div className='lb_prk_sld_content'>
                                    {/* <img src={event_photo}></img> */}
                                    <embed className="vm-vid" src={event_ytb_video.youtube_video}></embed>
                                    {/* <iframe id='' className="vm-vid" src={event_ytb_video.youtube_video} allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>                              */}
                                </div>
                                
                            </div>
                        )}

                    </Slider>
                    <p className='cstm_para event_para' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                </div>
            ))}

        </div>
    </>
  )
}
