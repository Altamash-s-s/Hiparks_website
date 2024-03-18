import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Helmet from 'react-helmet';
import $ from "jquery";
import Error_page from '../../pages/error_page';

export default function Park_inside_spotlight() {
    
  let { slug } = useParams(); 
  const { isLoading, data, error } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
  );

  useEffect(() => {

    var prk_url = window.location.pathname;
    // var prk_url1 = '/parks/'+ slug; 
    // console.log("URL0 "+ prk_url);
    // console.log("URL1 "+ prk_url1);
 
    $(document).ready(function () {

        $.ajax({
            url: `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Process the response and extract slug values
                var slugs = data.map(function(item) {
                    return item.slug;
                });

                // Log the slug values to the console (you can do whatever you want with them)
                console.log(slugs);
                if (prk_url === '/'+ slugs) {

                }
                else  {

                    window.location.href="/page-not-found";
                }
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });

    });

  });

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div>
            <div className='park_inside_spotlight_sec' key={id}>

                <Helmet>
                        <title>{acf.meta_title}</title>
                        <meta name="description" content={acf.meta_description} />
                </Helmet>
                
               
                <img src={acf.park_spotlight_image} className='park_inside_bg_img'></img>
                <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img> 

                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a>  /  <a href='/industrial-and-logistics-parks-in-india'>INDUSTRIAL AND WAREHOUSING PARKS</a>  / {acf.state_name}  /  {acf.park_name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='spotlight_content_dv'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='spotlight_content_box'>
                                <div className='spotlight_inner_content'>
                                    <div className='prk_dtl_line1'>
                                        {/* <img src={require('../../assets/img/svg/park_loc_icon.svg').default} className='mark_icon'></img>
                                        <p className='section_sub_heading'>{acf.zone_name}   <span>{'>'}</span> {acf.state_name} </p> */}
                                        <h1 className='new_h1'>{acf.h1_tag}</h1>
                                    </div>
                                    <div className='prk_dtl_line2 prk_spot_inside_hd'>
                                        <h1 className='spotlight_pg_title'>{acf.park_name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))} 
    </>
  )
}
