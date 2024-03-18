import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import $ from "jquery";
import Helmet from 'react-helmet';
import { useEffect, useRef } from "react";

export default function Client_inside_spotlight() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories/?slug=${slug}`
    );

    useEffect(() => {

        var clnt_url = window.location.pathname;
        // var clnt_url1 = '/case-studies/'+ slug; 
        // console.log("URL0 "+ clnt_url);
        // console.log("URL1 "+ clnt_url1);
     
        $(document).ready(function () {
    
            $.ajax({
                url: `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories/?slug=${slug}`,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    // Process the response and extract slug values
                    var slugs = data.map(function(item) {
                        return item.slug;
                    });
    
                    // Log the slug values to the console (you can do whatever you want with them)
                    console.log(slugs);
                    if (clnt_url === '/case-studies/'+ slugs) {

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
        {data && data.map(({ id , acf , title , category , slug}) => (
        <div>
            <div className='park_inside_spotlight_sec client_inside_spotlight_sec'>

                <Helmet>
                    <title>{acf.meta_title}</title>
                    <meta name="description" content={acf.meta_description} />
                    <meta name="keyword" content={acf.meta_keyword} />

                    <meta property="og:title" content={acf.meta_title} />
                    <meta property="og:description" content={acf.meta_description} />
                    <meta property="og:image" content={acf.client_stories_image} />

                    <meta name="twitter:title" content={acf.meta_title} />
                    <meta name="twitter:description" content={acf.meta_description} />
                    <meta name="twitter:image" content={acf.client_stories_image} />

                </Helmet>

                
                <img src={acf.client_stories_image} alt={acf.image_alt_tag} className='park_inside_bg_img'></img>
                <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
       
                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a>  /  <a href='/case-studies'>Case Studies /</a> <span dangerouslySetInnerHTML={{ __html: title.rendered }}></span></h3>
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
                                        <h1 className='spotlight_pg_title bg_size_ttl' dangerouslySetInnerHTML={{ __html: title.rendered }}></h1>
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