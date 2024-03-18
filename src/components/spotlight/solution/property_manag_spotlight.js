import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';

export default function Property_manag_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Comprehensive Property Management for Uninterrupted Operations</title>
                <meta name="description" content="Experience seamless property management with 24x7 operations, robust safety and impeccable hygiene standards." />
                <meta name="keyword" content="warehouse Management " />

                <meta property="og:title" content="Comprehensive Property Management for Uninterrupted Operations" />
                <meta property="og:description" content="Experience seamless property management with 24x7 operations, robust safety and impeccable hygiene standards." />
                <meta property="og:image" content="" />

                <meta name="twitter:title" content="Comprehensive Property Management for Uninterrupted Operations" />
                <meta name="twitter:description" content="Experience seamless property management with 24x7 operations, robust safety and impeccable hygiene standards." />
                <meta name="twitter:image" content="" />
            </Helmet>

          
            <img alt='Hiparks wareshouse management services' src={require('../../../assets/img/solutions_inside/proprty_mang/proprty_mang_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>
   
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  / <a href='/solutions'> Solutions</a> / Property Management</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>Property Management</h1>
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
