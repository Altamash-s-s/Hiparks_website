import React from 'react'
import loadable from '@loadable/component'

import Header from '../components/global/header';
// import Park_inside_spotlight from '../components/spotlight/park_inside_spotlight';
// import Prk_overview from '../components/sections/prk_overview';
// import Location_map from '../components/sections/location_map';
// import Park_infrastructure from '../components/sections/park_infrastructure';
// import Park_gallery from '../components/sections/park_gallery';
// import Other_park from '../components/sections/other_park';
// import Conversation_form from '../components/sections/conversation_form';
import Footer from '../components/global/footer';
import Error_page from './error_page';



import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

const Park_inside_spotlight = loadable(() => import('../components/spotlight/park_inside_spotlight'));
const Prk_overview = loadable(() => import('../components/sections/prk_overview'));
const Location_map = loadable(() => import('../components/sections/location_map'));
const Park_infrastructure = loadable(() => import('../components/sections/park_infrastructure'));
const Park_gallery = loadable(() => import('../components/sections/park_gallery'));
const Other_park = loadable(() => import('../components/sections/other_park'));
const Conversation_form = loadable(() => import('../components/sections/conversation_form'));



export default function Park_inside_page() {


  
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

  }, []);


  return (
    <>
       
        <div className='park_inside_page'>
          <div ref={(el) => (body = el)} className="Headd">

            <div className='park_inside_innerdv'>  
              <Header/>
              <Park_inside_spotlight/>
              <Prk_overview/>
              <Location_map/>
              <Park_infrastructure/>
              <Park_gallery/>
              <Other_park/>
              <Conversation_form/>
              <Footer/>
            </div>
            

          </div>
          <Transition/>
        </div>
        
    </>
  )
}
