import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';

export default function Park_const_devel_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>

            <Helmet>
                <title>Ensuring Compliance and Transparency in Industrial Park Development</title>
                <meta name="description" content="Horizon Industrial Parks: Committed to compliance, transparency, and ethical business practices in industrial park development, ensuring seamless customer operations and long-term sustainability." />
                <meta name="keyword" content="Industrial parks compliances" />

                <meta property="og:title" content="Ensuring Compliance and Transparency in Industrial Park Development" />
                <meta property="og:description" content="Horizon Industrial Parks: Committed to compliance, transparency, and ethical business practices in industrial park development, ensuring seamless customer operations and long-term sustainability." />
                <meta property="og:image" content="" />

                <meta name="twitter:title" content="Ensuring Compliance and Transparency in Industrial Park Development" />
                <meta name="twitter:description" content="Horizon Industrial Parks: Committed to compliance, transparency, and ethical business practices in industrial park development, ensuring seamless customer operations and long-term sustainability." />
                <meta name="twitter:image" content="" />
            </Helmet>

            <img src={require('../../../assets/img/solutions_inside/parks_compliance/park_complnce_spotlight_new.webp')} alt='Grade a industrial and logistics park park compliances and approvals' className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  / <a href='/solutions'> Solutions</a> / PARK COMPLIANCES AND APPROVALS</h3>
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
                                    <h1 className='spotlight_pg_title bg_size_ttl'>PARK COMPLIANCES AND APPROVALS</h1>
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
