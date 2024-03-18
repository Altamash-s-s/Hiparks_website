import React from 'react'

import Header from '../components/global/header';
import Explore_spotlight from '../components/spotlight/explore_spotlight';
import Explore_overview from '../components/sections/explore_overview';
import Our_purpose from '../components/sections/our_purpose';
import Milestone_sec from '../components/sections/milestone_sec';
import Leadership_sec from '../components/sections/leadership_sec';
import Be_future from '../components/sections/be_future';

import Footer from '../components/global/footer';


import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect , useRef } from 'react';
import { Power3, Power4 } from "gsap";

import Helmet from 'react-helmet';

export default function Explore_page() {
  
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
        <div className='explore_page'>

        <Helmet>
            <title>India's Premier Grade A Industrial and Logistics Parks</title>
            <meta name="description" content="Discover India's top-tier Grade A industrial and logistics parks, strategically located across 8 key markets." />
        </Helmet>

          <div ref={(el) => (body = el)} className="Headd">
            
              <Header/>
              <Explore_spotlight/>
              <Explore_overview/>
              <Our_purpose/>
              {/* <Milestone_sec/> */}
              <Leadership_sec/>
              <Be_future/> 
              <Footer/>

          </div>
        </div>
    </>
  )
}
