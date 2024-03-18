import React from 'react'
import Header from '../components/global/header';
import State_spotlight from '../components/spotlight/state/state_spotlight';
import State_info_sec from '../components/sections/state/state_info_sec';
import State_amenities_sec from '../components/sections/state/state_amenities_sec';
import State_landscape_sec from '../components/sections/state/state_landscape_sec';
import State_eco_indict_sec from '../components/sections/state/state_eco_indict_sec';
import State_incentives_sec from '../components/sections/state/state_incentives_sec';
import State_info2_sec from '../components/sections/state/state_info2_sec';
import State_slider_sec from '../components/sections/state/state_slider_sec';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function State_page() {

    let body = useRef(null);
    var tl_2 = gsap.timeline()

    
    useEffect(() => {
      
  
      tl_2.to(body,{
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut,
        delay: 1.2
      });
      return () => {
        tl_2.to(body, {
          opacity: "0",
          pointerEvents: 'none'
        });
      }
  
    }, []);


  return (
    <>
     
        <div className='State_page'>
          <div ref={(el) => (body = el)} className="Headd">
              
            
            <Header/>
            <State_spotlight/>
            <State_info_sec/>
            <State_amenities_sec/>
            <State_landscape_sec/>
            <State_eco_indict_sec/>
            <State_incentives_sec/>
            <State_info2_sec/>
            <State_slider_sec/> 
            <Footer/>

          </div>
          <Transition/>
        </div>
       
    </>
  )
}
