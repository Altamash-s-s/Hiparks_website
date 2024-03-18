import React from 'react'

import Header from '../components/global/header';
import Contact_spotlight from '../components/spotlight/contact_spotlight';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";
import Disclaimer_sec from '../components/sections/disclaimer_sec';

export default function Disclaimer_page() {


  let body = useRef(null);
  var tl_1 = gsap.timeline()

  useEffect(() => {

    // Page Transition Code

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
        <div className='home_page disclaimer_page'>
          <div ref={(el) => (body = el)} className="Headd">
            
              <Header/>
              
              <Disclaimer_sec/>
              
              <Footer/>
              
          </div>
        </div>

    </>
  )
}
