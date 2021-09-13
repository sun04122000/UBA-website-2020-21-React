 import React from 'react'
 import img6 from './images/Home/followblog.png'
import img7 from './images/Home/blog_bhatt.jpg'
 
 export const Blog_1 = () => {
   return (
     <div>
       {/* <!--======= BLOG =========--> */}
    <section className="blog">
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2>Fresh From The <span>Blog</span></h2>
          <p>Work.  Innovation.  Fun.</p>
        </div>

        {/* <!--======= BLOG ROW =========--> */}

        <div class="row">

          {/* <!--======= BLOG BIG VIDEO =========--> */}
          <div className="col-md-6">
            <img className="img-responsive" src={img6} alt="" /> <a href="#."></a> 
          </div>

          {/* <!--======= BLOG RIGTH =========--> */}

          <div className="col-md-6"> <br/><br/><br/><br/><br/>
            {/* <!--======= BLOG 2 =========--> */}
            <ul className="row">
              <li className="col-xs-4"> <a href="https://www.facebook.com/TheMohitBhatt"><img className="img-responsive" src={img7} alt="" /></a> </li>
              <li className="col-xs-8"> <a className="font-lora title" href="#.">A Luxuriate Voyage</a> <span className="font-lora">February 5, 2020  |  Mohit Bhatt </span>
                <p>In this blog, Mohit Bhatt covers his journey from being a part of the part of the team to leading it. </p>
                <a href="#." class="btn">Read More <i class="fa fa-arrow-circle-o-right"></i></a> </li>
            </ul>
            {/* <!--======= BLOG 3 =========--> */}


          </div>
        </div>
      </div>
    </section> 
     </div>
   )
 }
 