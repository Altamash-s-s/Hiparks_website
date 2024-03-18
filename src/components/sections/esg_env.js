import React from 'react'
import '../../assets/css/esg_env.css'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Esg_env() {

  // gloabl line GSAP
  gsap.registerPlugin(ScrollTrigger); 
  
  // border animation variable
  const esg_env_hd = useRef(null);
  const esg_para = useRef(null);
  const envBorder_aniamtion = useRef(null);

  useEffect(() => {
    
    // Heading text animation code
    gsap.to("#esg_env_hd", {
        y:0,
        duration: 1.3,
        ease: "power4.out",
        delay: 0.3,
        scrollTrigger: {
            trigger: "#esg_env_hd",
            markers: false
        }
    });

    // Para animation code
    gsap.to("#esg_para", {
        opacity:1,
        duration: 1.5,
        ease: "linear",
        delay: 0.9,
        scrollTrigger: {
            trigger: "#esg_para",
            markers: false
        }
    });


    // border animation code
    gsap.to("#envBorder_aniamtion", {
        opacity:1,
        duration: .5,
        ease: "linear",
        delay: 0.5,
        width: "100%",
        scrollTrigger: {
            trigger: "#envBorder_aniamtion",
            markers: false
        }
    });

}, []);

  return (
    <>
 <div className='esg_env_sec tab_pd_LR' id='environment'>
        <div className='cstm_container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <div className="animate_txt">
                <h2 className='hdg_esg' ref={esg_env_hd} id='esg_env_hd'>Environment</h2>
              </div>
              <hr className='add_border p_opacity' ref={envBorder_aniamtion} id='envBorder_aniamtion'/>
              <p className='sub_para p_opacity' ref={esg_para} id='esg_para'>We are deeply committed to creating a greener and sustainable future. Our immediate focus is on reducing carbon emissions intensity in our parks by 15% over the next three years.</p>
            </div>
            <div className='row img-grid p_opacity' ref={esg_para} id='esg_para'>
              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/energy_saving.jpg')}></img>
                    <div className='img-content'>
                      <h2>Energy saving</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      <p>We will mitigate 3.1L tonnes worth of carbon, which is equivalent to planting 4.9L trees by:</p>
                      <ul>
                        <li>Using LED lights to reduce energy consumption</li>
                        <li>Providing electric vehicle charging facilities</li>
                        
                      </ul>
                    </div>
                </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                  <img className="esg-env-img" src={require('../../assets/img/renewable_energy.jpg')}></img>
                    <div className='img-content'>
                      <h2>Renewable Energy</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      {/* <p>We will mitigate 3.1 Lac tonnes worth of carbon, which is equivalent to planting 4.9L trees, and reduce our carbon footprint by 10% across our operations by:</p> */}
                      <ul>
                        <li>Installing roof top solar for generating 6MW of clean energy in FY 23</li>
                        <li>Installing solar-powered streetlights</li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/biodiversity.jpg')}></img>
                    <div className='img-content'>
                      <h2>Biodiversity</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      <p>We are committed to preserving and enhancing the biodiversity across our parks and their surrounding areas. We will ensure this by:</p>
                      <ul>
                        <li>Creating Miyawaki urban forest across our sites with the aim to absorb 30X more carbon dioxide</li>
                        <li>Planting trees indigenous to the geography</li>
                      </ul>
                    </div>
                  </div>
              </div>
            {/* </div> */}


            {/* <div className='row img-grid no-padding'> */}
            <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/water_management.jpg')}></img>
                    <div className='img-content'>
                      <h2>Water management</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      <p>We have reduced the intake of freshwater at our parks through efficient usage and recycling.This has been achieved by:</p>
                      <ul>
                        <li>Treating 100% of the grey water for landscaping {'&'} flushing</li>
                        <li>Maximizing stormwater retention with additional rainwater harvesting ponds</li>
                        <li>Installing low flow plumbing fixtures</li>
                        <li>Installing smart water meters</li>
                      </ul>
                    </div>
                  </div>
            </div>

             

            <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                  <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/waste_management.jpg')}></img>
                    <div className='img-content'>
                      <h2>Waste management</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      <p>We target releasing less than 5% of waste generated, from operation to landfill, by:</p>
                      <ul>
                        <li>Segregating waste across our parks and partnering with vendors to recycle it</li>
                        <li>Installing organic waste treatment facilities across all our parks</li>
                      </ul>
                    </div>
                  </div>
              </div>

              <div className='col-lg-4 col-md-6 col-12 guttr-spc'>
                <div className='img-clm'>
                    <img className="esg-env-img" src={require('../../assets/img/certifications.jpg')}></img>
                    <div className='img-content'>
                      <h2>Certifications</h2><img className="toggl-icon" src={require('../../assets/img/svg/close_icon.svg').default}></img>
                      <p>We are working towards achieving ISO certifications (ISO 9001, ISO 14001 and ISO 45001) for operations.</p>
                      <p>Horizon Industrial Parks is a founding members of the Indian Green Building Council (IGBC). We are certifying all our new & existing parks under IGBC.</p>
                      <ul>
                        <li>All new parks to take up certification during the design phase to influence sustainable design within our parks</li>
                        <li>All existing parks will be certified for operations</li>
                      </ul>
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
