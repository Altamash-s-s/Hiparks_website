import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';


export default function Media_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Horizon Industrial Park's latest news and updates.</title>
                <meta name="description" content="Stay updated with the latest news, in-depth insights, and expert analysis in the logistics and industrial real estate sector." />
            </Helmet>
            
            <img src={require('../../assets/img/press_release.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
   
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Media</h3>
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
                                    <h1 className='spotlight_pg_title'>Media</h1>
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