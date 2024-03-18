import React from 'react'
import loadable from '@loadable/component'

import Header from '../components/global/header';
import Home_spotlight_slider from '../components/spotlight/home_spotlight_slider';
import Agile from '../components/sections/agile';
import Vlu_assets from '../components/sections/vlu_assets';
import Park from '../components/sections/park';
import Intg_solution from '../components/sections/intg_solution';
import Esg from '../components/sections/esg';
import Client from '../components/sections/client';
import News from '../components/sections/news';

import Cta from '../components/sections/cta';
import Footer from '../components/global/footer';
import Sticky from 'react-sticky-el';

import Transition from '../components/transition';
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { Power3, Power4 } from "gsap";

import ITS_tab_sec from '../components/sections/ITS_tab_sec';

// const Header = loadable(() => import('../components/global/header'));
// const Home_spotlight_slider = loadable(() => import('../components/spotlight/home_spotlight_slider'));
// const Agile = loadable(() => import('../components/sections/agile'));
// const Vlu_assets = loadable(() => import('../components/sections/vlu_assets'));
// const Park = loadable(() => import('../components/sections/park'));
// const Intg_solution = loadable(() => import('../components/sections/intg_solution'));
// const Esg = loadable(() => import('../components/sections/esg'));
// const Client = loadable(() => import('../components/sections/client'));
// const News = loadable(() => import('../components/sections/news'));




import Helmet from 'react-helmet';


export default function Home_page() {


  let body = useRef(null);
  var tl_1 = gsap.timeline()

  useEffect(() => {

    // Page Transition Code

    tl_1.to(body, {
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

  const articleStructuredData = {
    
      "@context": "https://schema.org",
      "@type": "ResearchProject",
      "name": "Hiparks",
      "alternateName": "Hiparks",
      "url": "https://www.hiparks.com/",
      "logo": "https://www.hiparks.com/static/media/horizon__logo_icon.6979f8bc5707e550d01a3c6fe4c3504f.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "088799 70705",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.instagram.com/hiparkscommunity/",
        "https://www.youtube.com/channel/UCOfvGN61RBCKY48sE8I6mJQ",
        "https://in.linkedin.com/company/horizon-industrial-parks"
      ]

  };

  return (
    <>

      <Transition />
      <div className='home_page'>

      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      
        <Helmet>
            <title>Industrial and logistics parks in India - Horizon Industrial Park</title>
            <meta name="description" content="Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India" />
        </Helmet>
        <div ref={(el) => (body = el)} className="Headd">

          <Header />
          <Home_spotlight_slider />
          <Agile />
          <Vlu_assets />
          <Park />
          <Intg_solution />
          <Esg />
          <ITS_tab_sec/>
          <Sticky className='fix-sec'>
            <Client />
          </Sticky>
          {/* <News /> */}
          <Footer />

        </div>
      </div>

      

    </>
  )
}
