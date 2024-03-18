import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';

export default function Blog_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Industrial and Warehousing Blog - Horizon Industrial Park</title>
                <meta name="description" content="Explore Horizon’s blog for comprehensive insights into the world of industrial and logistics real estate." />
            </Helmet>

        
            <img src={require('../../assets/img/blog_spotlight_new.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Blog</h3>
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