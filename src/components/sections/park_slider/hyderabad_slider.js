import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/park.css';
import useFetch from "react-fetch-hook";

export default function Hyderabad_slider() {

  const { isLoading, data, error } = useFetch(
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?categories=6"
  );

  const park_slider = {
    arrows: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    // centerMode: true,
    // centerPadding: '40px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 835,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,centerMode: true,
            centerPadding: '40px'
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px'
          }
        }
      ]
  };

  return (
    <>
      <div className='park_info_dv' id='div7'>
        <div className='park_name_dv'>
            <p className='park_name'>Hyderabad</p>
            <p className='park_status'><span>01</span> active</p>
            <p className='park_status'><span>01</span> Under Construction</p>
        </div>

        <div className='park_slider_outer_dv'>
            <Slider {...park_slider} className='park_main_slider'>
                
              {data && data.map(({ id ,title , acf , content , slug}) => (   
            
                <div className='park_sld' key={id}>

                  <a href={"/" + slug}>
                    <div className='prk_content_dv'>

                        <div className='prk_img_dv'>
                            <img src={acf.park_spotlight_image}></img>
                            <div className='patch_dv'>
                              <p>{acf.park_status}</p>
                            </div>
                            <div className='arrow_circle'>
                              <img src={require('../../../assets/img/svg/white_btn_arrow.svg').default}></img>
                            </div>
                        </div>

                        <div className='prk_inner_content'>
                            <p className='prk_name'>{acf.park_name}</p>

                            <div className='prk_cnt_hd'>
                              <p className='area_hd'>Area</p>
                              <p className='potential_hd'>Potential</p>
                              <p className='usage_hd'>Usage</p>
                            </div>

                            <div className='prk_cnt_vlu'>
                              <p className='area_vlu'>{acf.land_area}</p>
                              <p className='potential_hd_vlu'>{acf.development_potential}</p>
                              <p className='usage_hd_vlu'>{acf.land_usage}</p>
                            </div>

                            <a href={"/" + slug} className='prk_btn'>Explore more</a>
                        </div>

                    </div>
                  </a>
                </div>
                
              ))} 
              
            </Slider>
          </div>

      </div>
    </>
  )
}
