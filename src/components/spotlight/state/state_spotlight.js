import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';
import $ from "jquery";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function State_spotlight() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/states/?slug=${slug}`
    );

  return (
    <>
     {data && data.map(({ id, title , acf  }) => (
        <div>
            <div className='park_inside_spotlight_sec' key={id}>
    
                <Helmet>
                        <title>{acf.meta_title}</title>
                        <meta name="description" content={acf.meta_description} />
                </Helmet>

                <img src={acf.state_image} alt={acf.state_spotlight_image_alt} className='park_inside_bg_img'></img>
                <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>

                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a> /  {acf.state_name}</h3>
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
                                    <div className='prk_dtl_line2'>
                                        <h1 className='spotlight_pg_title bg_size_ttl'>{acf.state_name}</h1>
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
