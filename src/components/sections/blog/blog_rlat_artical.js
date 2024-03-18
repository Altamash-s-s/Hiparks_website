import React from 'react'
import useFetch from "react-fetch-hook";

export default function Blog_rlat_artical(props) {

    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=3&exclude=${props.prnt_blog}`
    );


  return (
    <>
      <div className='categ_dv_2'>
            <h2 className='section_sub_heading blog_col_hd'>Related articles</h2>
            <div className="blog_lndng_sidebar">

                {data && data.map(({ id , acf , title , category , slug}) => (

                    <a className='blog_anchor' href={'/blog/'+ slug}>
                        <div className='rlt_artcl_main'>
                            <div className='rlt_artcl1'>
                                <img src={acf.blog_image} alt={acf.blog_image_alt_text}></img>
                            </div>
                            <div className='rlt_artcl2'>
                                <h2 className='para' dangerouslySetInnerHTML={{ __html: title }}></h2>
                                <p className='bl_bx_date'><img className='date_icon' src={require('../../../assets/img/svg/date_icon.svg').default}></img>{acf.blog_publish_date}</p>
                            </div>
                            <a class="blog_read_more_btn" href={'/blog/'+ slug}>Read More</a>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </>
  )
}
