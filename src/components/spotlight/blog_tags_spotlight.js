import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { useParams } from "react-router-dom";
import useFetch from "react-fetch-hook";

export default function Blog_tags_spotlight() {

    let { id } = useParams();

    const { isLoading, data, error } = useFetch(
      `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?tags=${id}&per_page=1`
    );


  return (
    <>
        <div className='park_inside_spotlight_sec'>
            
            <img src={require('../../assets/img/solutions_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
      
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
    
                            {data && data.map(({ id , acf , title , category , slug}) => (
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a>  /  <a href='/blog'>Blog</a></h3>
                                </div>
                            ))}
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
                                    <h1 className='spotlight_pg_title'>Blog</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}