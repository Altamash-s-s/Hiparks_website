import React from 'react'
import '../../../assets/css/blog_landing_sec.css'
import $ from "jquery";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import Blog_tags from './blog_tags';
import Blog_categories from './blog_categories';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import 'swiper/css/pagination';
import Blog_featureslider from './blog_featureslider';

export default function Blog_landing_sec() {

    useEffect(() => {

        (function ($) {
            var pagify = {
                items: {},
                container: null,
                totalPages: 1,
                perPage: 3,
                currentPage: 0,
                createNavigation: function () {
                    this.totalPages = Math.ceil(this.items.length / this.perPage);

                    $('.pagination', this.container.parent()).remove();
                    var pagination = $('<div class="pagination"></div>').append('<a class=" pagi nav prev disabled" data-next="false"> < Prev </a>');

                    $(`<img  src={require('../../../assets/img/svg/date_icon.svg').default}></img>`).appendTo('.pagi.nav.prev');
                    for (var i = 0; i < this.totalPages; i++) {
                        var pageElClass = "page";
                        if (!i)
                            pageElClass = "page current";
                        var pageEl = '<a class="' + pageElClass + '" data-page="' + (
                            i + 1) + '">' + (
                                i + 1) + "</a>";
                        pagination.append(pageEl);
                    }
                    pagination.append('<a class="pagi nav next" data-next="true"> Next > </a>');
                    $('.blog_feat_col_1').append(pagination);
                    // this.container.before(pagination);

                    var that = this;
                    $("body").off("click", ".nav");
                    this.navigator = $("body").on("click", ".nav", function () {
                        var el = $(this);
                        that.navigate(el.data("next"));
                    });

                    $("body").off("click", ".page");
                    this.pageNavigator = $("body").on("click", ".page", function () {
                        var el = $(this);
                        that.goToPage(el.data("page"));
                    });
                },
                navigate: function (next) {
                    // default perPage to 5
                    if (isNaN(next) || next === undefined) {
                        next = true;
                    }
                    $(".pagination .nav").removeClass("disabled");
                    if (next) {
                        this.currentPage++;
                        if (this.currentPage > (this.totalPages - 1))
                            this.currentPage = (this.totalPages - 1);
                        if (this.currentPage == (this.totalPages - 1))
                            $(".pagination .nav.next").addClass("disabled");
                    }
                    else {
                        this.currentPage--;
                        if (this.currentPage < 0)
                            this.currentPage = 0;
                        if (this.currentPage == 0)
                            $(".pagination .nav.prev").addClass("disabled");
                    }

                    this.showItems();
                },
                updateNavigation: function () {

                    var pages = $(".pagination .page");
                    pages.removeClass("current");
                    $('.pagination .page[data-page="' + (
                        this.currentPage + 1) + '"]').addClass("current");
                },
                goToPage: function (page) {

                    this.currentPage = page - 1;

                    $(".pagination .nav").removeClass("disabled");
                    if (this.currentPage == (this.totalPages - 1))
                        $(".pagination .nav.next").addClass("disabled");

                    if (this.currentPage == 0)
                        $(".pagination .nav.prev").addClass("disabled");
                    this.showItems();
                },
                showItems: function () {
                    this.items.hide();
                    var base = this.perPage * this.currentPage;
                    this.items.slice(base, base + this.perPage).show();

                    this.updateNavigation();
                },
                init: function (container, items, perPage) {
                    this.container = container;
                    this.currentPage = 0;
                    this.totalPages = 1;
                    this.perPage = perPage;
                    this.items = items;
                    this.createNavigation();
                    this.showItems();
                }
            };

            // stuff it all into a jQuery method!
            $.fn.pagify = function (perPage, itemSelector) {
                var el = $(this);
                var items = $(itemSelector, el);

                // default perPage to 5
                if (isNaN(perPage) || perPage === undefined) {
                    perPage = 3;
                }

                // don't fire if fewer items than perPage
                if (items.length <= perPage) {
                    return true;
                }

                pagify.init(el, items, perPage);
            };
        })($);

        $(".blog_feat_col_1").pagify(6, ".blog_bx");

        $(document).ready(function () {
            $(".more_data").slice(0, 2).show();
            if ($(".more_data:hidden").length != 0) {
                $("#load").show();
            }
            $("#load").on("click", function (e) {
                e.preventDefault();
                $(".more_data:hidden").slice(0,1).slideDown(1,1);
                if ($(".more_data:hidden").length == 0) {
                    $("#load").hide();
                }
            });

            if ( $(".blog_frst_slider .swiper-wrapper .swiper-slide").length ) {  
                console.log('class found');
                $('.featured_sld_section').show();
            }
            else {
                console.log('Class Not Found');
                $('.featured_sld_section').hide();
                $('.blog_lnd_sec3').css('margin-top','65px');
            }
        })



    })


    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=50"
    );




    return (
        <>

            {/* section 1 */}
            {/* <div className='blog_lnd_sec1 featured_sld_section'>


                <div className='cstm_container'>
                    <div className='row no_LR_margin'>

                        <div className='col-12 leader_slider_col mob_pd_LR tab_pd_LR'>
                            <h2 className='hdg_esg'>Featured</h2>
                            <Blog_featureslider/>
                        </div>


                    </div>
                </div>

            </div> */}





            {/* featured of this month section */}
            <div className='blog_lnd_sec3'>

                <div className='cstm_container'>

                    <div className='row no_LR_margin blg_rw1' >


                        {/* <div className='col-12 mob_pd_LR tab_pd_LR blg_col1'>
                            <h2 className='hdg_esg'>All Blogs</h2>
                        </div> */}
                        <div className='col-md-12 col-lg-9 col-12  mob_pd_LR tab_pd_LR blg_col2'>


                            <div className='row no_LR_margin desktop_blogs blog_feat_col_1'>


                                {/* /{data && data.map(({ id, acf, title, category, slug, content }) => (
                                        <div className='col-md-6 col-lg-6 col-12 blog_feat_col2 blog_bx' key={id} >

                                            <div className='image-conatoner'>
                                                <div className='img-box'>
                                                    <img src={require('../../../assets/img/blog-feat-img.png')}></img>

                                                </div>
                                                <div className='text-box'>
                                                    <p className='new-para'>News</p>
                                                    <h2 >In-city Warehousing: How Proximity to City Center Can Drive Business Growth</h2>
                                                    <div className='icon-blog'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                            <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                        </svg>
                                                        <p>02 december 2022</p>
                                                    </div>
                                                    <p>How BTS Warehousing is Meeting Today's Business Demands</p>

                                                </div>
                                            </div>
                                        </div>

                                    ))} */}


                                {data && data.map(({ id, acf, title, category, slug, content }) => (    
                                <div className='col-md-6 col-lg-6 col-12 blog_feat_col2 blog_bx'>
                                    <a href={'/blog/'+ slug}>
                                        <div className='image-conatoner'>
                                            <div className='img-box'>
                                                <img src={acf.featured_slider_image} alt={acf.blog_image_alt_text}></img>
                                            </div>
                                            <div className='text-box'>
                                                <p className='new-para'>{category}</p>
                                                
                                                <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>

                                                <div className='icon-blog'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                        <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                    </svg>
                                                    <p>{acf.blog_publish_date}</p>
                                                </div>
                                                <a class="blog_read_more_btn" href={'/blog/'+ slug}>Read More</a>
                                                {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                            </div>
                                        </div>
                                    </a>
                                </div>
                                ))} 

                                {/* <div className='col-md-6 col-lg-6 col-12 blog_feat_col2 blog_bx'>
                                    <a href='/blog/blog_inside_page'>
                                        <div className='image-conatoner'>
                                            <div className='img-box'>
                                                <img src={require('../../../assets/img/blog-2.png')}></img>

                                            </div>
                                            <div className='text-box'>
                                                <p className='new-para'>News</p>
                                                <h2 >Impact of Industrial Parks on Regional Macro and Micro Economy</h2>
                                                <div className='icon-blog'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                        <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                    </svg>
                                                    <p>02 december 2022</p>
                                                </div>
                                                <p>Giving back to the community- Industrial Park Lens (An ESG angle).</p>

                                            </div>
                                        </div>
                                    </a>
                                </div> */}

                            </div>


                            <div className='row no_LR_margin mobile_blogs'>

                                {data && data.map(({ id, acf, title, category, slug, content }) => (  
                                    <div className='col-md-6 col-lg-6 col-12 blog_bx more_data'>

                                        <a href={'/blog/'+ slug}>
                                            <div className='image-conatoner'>
                                                <div className='img-box'>
                                                    <img src={acf.featured_slider_image} alt={acf.blog_image_alt_text}></img>
                                                </div>
                                                <div className='text-box'>
                                                    <p className='new-para'>{category}</p>
                                                   
                                                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>

                                                    <div className='icon-blog'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                            <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                        </svg>
                                                        <p>{acf.blog_publish_date}</p>
                                                    </div>
                                                    <a class="blog_read_more_btn" href={'/blog/'+ slug}>Read More</a>
                                                    {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))} 


                                {/* <div className='col-md-6 col-lg-6 col-12 blog_bx more_data'>

                                    <a href='/blog/blog_inside_page'>
                                        <div className='image-conatoner'>
                                            <div className='img-box'>
                                                <img src={require('../../../assets/img/blog-2.png')}></img>

                                            </div>
                                            <div className='text-box'>
                                                <p className='new-para'>News</p>
                                                <h2 >Impact of Industrial Parks on Regional Macro and Micro Economy</h2>
                                                <div className='icon-blog'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                        <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                    </svg>
                                                    <p>02 december 2022</p>
                                                </div>
                                                <p>Giving back to the community- Industrial Park Lens (An ESG angle).</p>

                                            </div>
                                        </div>
                                    </a>
                                </div>*/}

                                <div id="load"> 
                                  <img className='arrow-img' src={require('../../../assets/img/svg/arrow.svg').default}></img>
                                
                                </div>

                            </div>

                        </div>


                        <div className='col-md-12 col-lg-3 col-12 blg_col3'>

                            <div className='row no_LR_margin sticky_dv'>
                                <div className='col-12'>
                                    <div className="categ_dv">

                                        <Blog_categories />
                                        {/* <Blog_tags /> */}

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>


                </div>

            </div>

        </>
    )
}

