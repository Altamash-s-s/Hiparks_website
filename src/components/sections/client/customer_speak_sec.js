import React from "react";
import { useEffect, useRef } from "react";
import "../../../assets/css/customer_speak_sec.css";

export default function Customer_speak_sec() {

    const videoCS = useRef(null);
    const videoCSattemptPlay = () => {
        videoCS &&
      videoCS.current &&
      videoCS.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };

    useEffect(() => {
        videoCSattemptPlay();
    }, []);

  return (
    <>
      <div className="customer_speak_sec mob_pd_LR tab_pd_LR" id='testimonial'>
        <div className="cstm_container">
            <div className="row no_LR_margin">
            <div className="col-12 no_padding">
                <h2 className="section_heading">Customers speak</h2>
                <div className="row cut_spk_row no_LR_margin">
                    <div className="col-lg-8 col-md-12 col-12 no_padding">
                        <div className="cut_spk_col1_dv">
                            {/* <video id='agile_video' className='cstm_spk_video' controls  muted src='https://www.youtube.com/embed/CUb9SKAcOFM?si=NoLQorok8XKW9TQF' ref={videoCS} /> */}
                            {/* <embed className="vm-vid" src="https://www.youtube.com/embed/CUb9SKAcOFM?si=NoLQorok8XKW9TQF"></embed> */}
                            
                            <iframe id='' className="vm-vid"src="https://player.vimeo.com/video/905851105"  allow="autoplay" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe> 

                            {/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/905851105?autoplay=1&muted=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="What's it like to have Horizon as a Partner_"></iframe></div>
                            <script src="https://player.vimeo.com/api/player.js"></script> */}

                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 no_padding">
                        <div className="cut_spk_col2_dv">
                            <p className="sub_para">We are passionate about our customers’ success and take pride in their thriving growth stories.</p>
                            <p className="sub_para">Our quick response times, collaborative approach to creating the right-fit solutions and focus on operating sustainably are the qualities our customers and partners have consistently commended and recognised.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
