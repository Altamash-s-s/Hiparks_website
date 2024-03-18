import React from 'react'

import Header from '../components/global/header';
import Media_spotlight from '../components/spotlight/media_spotlight';
import Media_sec from '../components/sections/media/media_sec';
import Footer from '../components/global/footer';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

export default function Media_page() { 
  
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
        <div className='home_page '>
          <div ref={(el) => (body = el)} className="Headd">

              <Header/>
              <Media_spotlight/>
              <Media_sec/>
              
              <Footer/>

          </div>
        </div>
    </>
  )
}
