import React from 'react'

import Header from '../components/global/header';
import Contact_spotlight from '../components/spotlight/contact_spotlight';
import Address_sec from '../components/sections/address_sec';
import Contact_map from '../components/sections/contact_map'
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Contact_page() {


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
        <div className='home_page contact-pg'>
          <div ref={(el) => (body = el)} className="Headd">
            
              <Header/>
              <Contact_spotlight/>
              <Address_sec />
              <Contact_map />
              <Footer/>
              
          </div>
        </div>

    </>
  )
}
