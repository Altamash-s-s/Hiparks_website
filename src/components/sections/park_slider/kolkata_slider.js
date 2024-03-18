import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../../assets/css/park.css';

export default function Kolkata_slider() {
  return (
    <>
      <div className='park_info_dv' id='div9'>
        <div className='park_name_dv'>
            <p className='park_name'>Kolkata</p>
            <p className='park_status'><span>02</span> active</p>
            <p className='park_status'><span>04</span> Under Construction</p>
        </div>
      </div>
    </>
  )
}
