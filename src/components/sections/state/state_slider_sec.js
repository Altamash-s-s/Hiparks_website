import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/state_slider_sec.css';
import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";


export default function State_slider_sec() {

    const park_slider = {
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        centerMode: true,
        centerPadding: '80px',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: '80px'
                  
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px'
                  
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px'
                  
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px'
                  
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
                slidesToScroll: 1,
                
              }
            },
            {
              breakpoint: 835,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
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
                centerPadding: '50px'
              }
            }
          ]
    };
    // const sliderRef = useRef(null);
    // useEffect(() => {
    //     if (sliderRef.current) {
    //       // Use the slickGoTo method to navigate to the slide with data-index 0
    //       sliderRef.current.slickGoTo(0);
    //     }
    // }, [data]);

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );
  
  

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div className='state_slider_sec mob_pd_LR tab_pd_LR'>
            <div className='cstm_container'>
              <div className='row'>
                  <div className='col-12'>
                      <h2 className='section_sub_heading ovrview_sub_hd'>{acf.section_title_region}</h2>
                  </div>
              </div>
            </div>
            <div className='news_slider_sec '>
                <Slider {...park_slider} className=''>

                    {acf.region_slider.map(rg_sld => (    
                        <div className='st_sld'>
                            
                            <div className='st_img_dv'>
                                <a href={rg_sld.state_url}>
                                    <img src={rg_sld.state_image_region} alt={acf.region_image_alt}></img>
                                    <div className='st_name_dv'>
                                        <h3>{rg_sld.state_name_region}</h3>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    ))}

                    {/* <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Delhi.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Delhi</h3>
                            </div>
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Maharashtra.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Maharashtra</h3>
                            </div>
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Tamil_Nadu.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Tamil Nadu</h3>
                            </div>
                        </div>
                    </div>

                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Delhi.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Delhi</h3>
                            </div>                
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Maharashtra.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Maharashtra</h3>
                            </div>                
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Tamil_Nadu.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Tamil Nadu</h3>
                            </div>                
                        </div>
                    </div>

                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Delhi.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Delhi</h3>
                            </div>                
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Maharashtra.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Maharashtra</h3>
                            </div>                
                        </div>
                    </div>
                    <div className='st_sld'>
                        <div className='st_img_dv'>
                            <img src={require('../../../assets/img/state/state_slider/Tamil_Nadu.jpg')}></img>
                            <div className='st_name_dv'>
                                <h3>Tamil Nadu</h3>
                            </div>                
                        </div>
                    </div>
                     */}

                </Slider>
            </div>
        </div>

        ))} 
    </>
  )
}
