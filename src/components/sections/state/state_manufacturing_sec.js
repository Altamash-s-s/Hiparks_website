import React from 'react'
import '../../../assets/css/wrk_envrmnt.css'
import '../../../assets/css/state_manufacturing_sec.css'
import '../../../assets/css/source_link.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useRef } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";

export default function State_manufacturing_sec() {

    const manufacture_slider = {
        arrows: true,
        infinite: false,
        slidesToShow:6,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll:1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            }
        ]
    };


    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );


    useEffect(() => {
        $(document).ready(function() {
        
            var source_link = $(".manufac_contri_sec .source_link span").text().trim();

            if(source_link.length <= 0){
                $('.manufac_contri_sec .source_link').hide();
            }
            else {
                $('.manufac_contri_sec .source_link').show();
            }

        });
    })

    

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div className="manufac_contri_sec mob_pd_LR tab_pd_LR" id="" key={id}>
            <div className="cstm_container">
                <div className="row">
                    <div className="col-12 manu_col1">
                        <h2 className='section_sub_heading'>{acf.section_title_manuf}</h2>
                    </div>
                    <div className="col-lg-12 col-12 manu_col2">

                        <Slider {...manufacture_slider} className='work_slider'>
                                
                            {acf.slider_data.map(sld_d => (    
                                 <div className='wrk_sld'>
                                    <div className='wrk_content'>
                                        <img className='' src={sld_d.slider_icon} alt={acf.slider_icon_alt}></img>
                                        <p className=''  dangerouslySetInnerHTML={{ __html: sld_d.slider_description }}></p>
                                    </div>
                                </div>
                            ))}

                            {/* <div className='wrk_sld ws_1'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/passng_car.svg').default}></img>
                                    <p className=''>Two-Thirds of India’s Passenger Cars</p>
                                </div>
                            </div>
                            <div className='wrk_sld ws_2'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/tractor.svg').default}></img>
                                    <p className=''>50% of India’s Tractors</p>
                                </div>
                            </div>
                            <div className='wrk_sld ws_3'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/motorcycle.svg').default}></img>
                                    <p className=''>60% of India’s Motorcycles</p>
                                </div>
                            </div>
                            <div className='wrk_sld ws_4'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/scooter.svg').default}></img>
                                    <p className=''>No.1 in World for 2-Wheelers Manufacturing</p>
                                </div>
                            </div>

                            <div className='wrk_sld ws_5'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/software.svg').default}></img>
                                    <p className=''>3rd Largest Exporter of Software</p>
                                </div>
                            </div>
                            

                            <div className='wrk_sld ws_6'>
                                <div className='wrk_content'>
                                    <img className='' src={require('../../../assets/img/state/manu_contribution/fridge.svg').default}></img>
                                    <p className=''>50% of India’s Refrigerators</p>
                                </div>
                            </div> */}


                        </Slider>

                    </div>
                    <div className='col-12 manu_col3'>
                        <p className='source_link manuf_sourc' >Source: <span>{acf.manufac_source_link}</span></p>
                    </div>

                </div>
            </div>
        </div>
    ))}
    </>
  )
}
