import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faruknagar_eoc from '../ease_of_connect_elsc/faruknagar_eoc';



export default function Faruknagar_slider_elsc() {

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
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_A.png')}></img>
                        <div className=' max_btn' target="1">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>

                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.28 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>11</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>End of November 2023</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>
                </div>
                
                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Faruknagar_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_A.png')}></img>
                    <div className='maximize_btn' target="1">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_C.png')}></img>
                        <div className=' max_btn' target="2">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>
                
                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.21 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>8</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>End of September  2023</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>
                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Faruknagar_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>
                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_C.png')}></img>
                    <div className='maximize_btn max_btn' target="2">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block D</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_D.png')}></img>
                        <div className=' max_btn' target="3">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.33 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>16</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Ready for dry access</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    <Faruknagar_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_D.png')}></img>
                    <div className='maximize_btn' target="3">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 4     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_E.png')}></img>
                        <div className=' max_btn' target="4">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.23 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>11.45 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>21</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>2 months from signing of a definitive agreement</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    <Faruknagar_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_E.png')}></img>
                    <div className='maximize_btn' target="4">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 5     */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block J1</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_J1.png')}></img>
                        <div className=' max_btn' target="5">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                        <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.18 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>12</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability from:</p>
                            <p>Ready to move</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Built-to-Suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Faruknagar_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/thumb/Block_J1.png')}></img>
                    <div className='maximize_btn' target="5">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

      </Slider>

      

      {/* ------------------------------ Parks Image popup code ------------------------------ */}


        {/*--------- Block A ------- */}
        <div className='prk_img_popup' id='div1'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/popup_img/Block_A.jpg')}></img>
        </div>

        {/*--------- Block C ------- */}
        <div className='prk_img_popup' id='div2'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/popup_img/Block_C.jpg')}></img>
        </div>

        {/*--------- Block D ------- */}
        <div className='prk_img_popup' id='div3'>

            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/popup_img/Block_D.jpg')}></img>
        </div>

        {/*--------- Block E ------- */}
        <div className='prk_img_popup' id='div4'>

            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/popup_img/Block_E.jpg')}></img>
        </div>

        {/*--------- Block J1 ------- */}
        <div className='prk_img_popup' id='div5'>

            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Farukhnagar_map/popup_img/Block_J1.jpg')}></img>
        </div>

      <div className='prk_img_popup_overlay'></div> 
      
       
      
    </>
  )
}
