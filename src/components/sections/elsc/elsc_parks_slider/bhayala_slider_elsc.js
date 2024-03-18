import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bhayala_eoc from '../ease_of_connect_elsc/bhayala_eoc';

export default function Bhayala_slider_elsc() {

    const elsc_prk_sld = {
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800
    };



  return (
    <>
      <Slider {...elsc_prk_sld} className='elsc_prk_sld'>

        {/*------------ Slide 1     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Bhayala_map/thumb/Bhayala_block_B.png')}></img>
                        <div className=' max_btn' target="27">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.10 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>-</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>-</p>
                        </div> */}
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Bhayala_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>

            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Bhayala_map/thumb/Bhayala_block_B.png')}></img>
                    <div className='maximize_btn' target="27">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>

      

      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div27'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Bhayala_map/popup_img/Block_B.jpg')}></img>
        </div>

      <div className='prk_img_popup_overlay'></div> 
      
       
      
    </>
  )
}
