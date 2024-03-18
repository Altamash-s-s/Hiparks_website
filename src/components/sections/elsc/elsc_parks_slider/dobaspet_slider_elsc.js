import React from 'react'
import Slider from 'react-slick';
import '../../../../assets/css/elsc_parks_slider.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dobaspet_one_eoc from '../ease_of_connect_elsc/dobaspet_one_eoc';



export default function Dobaspet_slider_elsc() {

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

        {/*------------ Slide 1   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block A</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_A.png')}></img>
                        <div className=' max_btn' target="28">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Warehousing</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_A.png')}></img>
                    <div className='maximize_btn' target="28">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 2   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block B</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_B.png')}></img>
                        <div className=' max_btn' target="29">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_B.png')}></img>
                    <div className='maximize_btn' target="29">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 3   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block C</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_C.png')}></img>
                        <div className=' max_btn' target="30">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.34 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_C.png')}></img>
                    <div className='maximize_btn' target="30">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 4   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block D</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_D.png')}></img>
                        <div className=' max_btn' target="31">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_D.png')}></img>
                    <div className='maximize_btn' target="31">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 5   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block E</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_E.png')}></img>
                        <div className=' max_btn' target="32">
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
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_E.png')}></img>
                    <div className='maximize_btn' target="32">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 6   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block F</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_F.png')}></img>
                        <div className=' max_btn' target="33">
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
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    

                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_F.png')}></img>
                    <div className='maximize_btn' target="33">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 7   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block G</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_G.png')}></img>
                        {/* <div className=' max_btn' target="34">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div> */}
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.38 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_G.png')}></img>
                    <div className='maximize_btn' target="34">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 8   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block H</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_H.png')}></img>
                        <div className=' max_btn' target="35">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.35 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>NA</p>
                        </div> */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>

                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_H.png')}></img>
                    <div className='maximize_btn' target="35">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>

        {/*------------ Slide 9   */}
        <div className='ep_sld eps1'>

            <div className='ep_sld_one'>
                <div className='block_name_dv'>
                    <h2>Block J</h2>
                </div>

                <div className='mob_map_img_dv'>
                    <div className='ep_map_dv'>
                        <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_J.png')}></img>
                        <div className=' max_btn' target="36">
                            <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                        </div>
                    </div>
                </div>


                <div className='ep_details'>
                    <div className='ep_dtls_inner'>
                    <div className='dv_lst'>
                            <p>Available space:</p>
                            <p>0.54 MSFT</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Usage:</p>
                            <p>Industrial / Warehousing</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Built-to-suit possibility:</p>
                            <p>Yes</p>
                        </div>
                        {/* <div className='dv_lst'>
                            <p>Height:</p>
                            <p>12 mtrs</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Docks:</p>
                            <p>14</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Floor Strength:</p>
                            <p>5 T /m2 UDL and 7T Point Load</p>
                        </div>
                        <div className='dv_lst'>
                            <p>Availability From:</p>
                            <p>Ready for Dry Access</p>
                        </div>
                         */}
                    </div>

                </div>

                <div className='ep_divider'></div> 

                <div className='ep_ease_connect_dv'>
                    
                    <Dobaspet_one_eoc/>
                    <a class="bksite_sldr book_visit_btn">Book a site visit</a>

                </div>


            </div>
            
            <div className='ep_sld_two'>
                <div className='ep_map_dv'>
                    <img src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/thumb/Dobbaspet_I_Block_J.png')}></img>
                    <div className='maximize_btn' target="36">
                        <img src={require('../../../../assets/img/svg/elsc_landing/maximize_btn.svg').default}></img>
                    </div>
                </div>
            </div>

        </div>


      </Slider>

      

      {/* ------------------------------ Parks Image popup code ------------------------------ */}

        <div className='prk_img_popup' id='div28'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_A.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div29'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_B.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div30'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_C.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div31'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_D.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div32'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_E.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div33'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_F.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div34'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_G.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div35'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_H.jpg')}></img>
        </div>

        <div className='prk_img_popup' id='div36'>
            <a className='prk_img_popup_close'>
                <img src={require('../../../../assets/img/elsc_landing_pg/cancel.png')}></img>
            </a>
            <img className='elsc_park_map_img ' src={require('../../../../assets/img/elsc_landing_pg/Dobbaspet_I_map/popup_img/Block_J.jpg')}></img>
        </div>

      <div className='prk_img_popup_overlay'></div> 
      
       
      
    </>
  )
}
