import React from 'react'

import Header from '../components/global/header';
import Client_spotlight from '../components/spotlight/client_spotlight';
import Client_slider from '../components/sections/client/client_slider';
import Client_testimonial from '../components/sections/client/client_testimonial';
import Client from '../components/sections/client';
import Conversation_form from '../components/sections/conversation_form';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import Client_form_sec from '../components/sections/client/client_form_sec';
import Sticky from 'react-sticky-el';
import Customer_speak_sec from '../components/sections/client/customer_speak_sec';


export default function Solution_page() { 
  
  let body = useRef(null);
  var tl_1 = gsap.timeline()
  
  useEffect(() => {

   

    tl_1.to(body,{
      opacity: "1",
      pointerEvents: "auto",
      ease: Power4.easeInOut,
      delay: 1.2
    });
    return () => {
      tl_1.to(body, {
        opacity: "0",
        pointerEvents: 'none'
      });
    }

  })
  
  return (
    <>
        <Transition/>
        <div className='client_page case_studies_client'>
          <div ref={(el) => (body = el)} className="Headd">

              <Header/>
              <Client_spotlight/>
              <Client_slider/>  
              {/* <Client_form_sec/> */}
              <Customer_speak_sec/>
              <Client_testimonial/>
              {/* <Sticky className='fix-sec'> */}
              <Client/>
              {/* </Sticky> */}
              {/* <div style={{borderTop: "1px solid rgb(235 125 43 / 73%)"}}></div> */}
              <Conversation_form/>
              <Footer/>

          </div>
        </div>
    </>
  )
}
