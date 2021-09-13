// import React, { useState, useEffect, useRef } from 'react'
// import Set from './settings/Set'
import IdentityCard from './settings/IdentityCard'
import { Test } from './settings/Test'
import { Images_sequence } from './settings/Images_sequence'
import { Blog_1 } from './settings/Blog_1'
import food_kit from './settings/images/Beladi/CycleDonation/covid.jpg'
import cycle_donation from './settings/images/Beladi/CycleDonation/i.jpg'
import swacchta_hi_seva from './settings/images/Chharba/PlasticFreeIndia_Chharba/i.jpeg'
import director from './settings/images/patron/director.JPG'
import mparida from './settings/images/patron/mprdaf.jpg'
import ap from './settings/images/patron/Ap.jpeg'
import bhanu from './settings/images/patron/bhanu.jpg'
import Inspiration from './settings/Inspiration'
import { BsFillHeartFill } from 'react-icons/bs';
import "./settings/css/Style.css"
import "./App.css"
import About from './settings/About'
import './css/Carousel.css';
import ImageSlider from "./settings/Slider";


export const HomeScreen = () => {


  return (
    <>


      <About />


      <div className="container">
        <section class="cases">
          {/* <!--======= TITTLE =========--> */}
          <div class="tittle">
            <h2>Our Recent <span>Initiatives </span></h2>
            <p>Brightest <span class="underline">minds at work</span> here</p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <img src={food_kit} />
                <Test village="All Adopted villages |" date="April 07, 2020" init="food kit distribution" initiative="COVID19: Team UBA IIT Roorkee distributed food kits" />
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <img src={cycle_donation} />
                <Test village="Beladi |" date="October 12, 2019" init="Cycle Donation" initiative="Donating unused cycles at IITR to village students in Beladi." />
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <img src={swacchta_hi_seva} />
                <Test village="Chharba |" date="September 29, 2019" init="Swacchta Hi Seva" initiative="A step towards greener and cleaner India promoted through a campaign.." />
              </center>
            </div>
          </div>
        </section>
      </div>

      {/* <!--======= HOW CAN YOU HELP =========--> */}
      <section className="how-can-help what-we">
        <div className="container">
          <ul className="row">

            {/* <!--======= HOW CAN YOU HELP =========--> */}
            <li className="col-md-8 with-map"> <span className="big-text font-lora">HOW <small> DO WE WORK?</small></span>
              <hr />
              <h6>Putting young minds at work. Inspiring social innovation. </h6>
              <p align="justify">One of the main problems for rural India is not being at the same pace of development as the urban counterpart. This is due to the lack of schemes, that involve the participation from all the stakeholders. There is a gap between the government policies and its beneficiaries. The gap widens with every initiative of the government that fails to reach the remotest parts of the country. However, in a country with a population of over 1.25 billion, it is overwhelmingly difficult to design an initiative that benefits all. Therefore, there is a need to synergize the efforts of Academia- Government-Industries & Society in every area to orchestrate ground level models for technological, social as well as administerial betterment of rural India.</p>


            </li>

            {/* <!--======= OUR PROGRAM =========--> */}
            <li className="col-md-4">
              <div className="program">
                <div className="inner">
                  <h3>Check out the latest issue
                    of our biannual newsletter! <br />
                    <span> 6 months <br />
                      15 initiatives </span></h3>
                  <a href="docs/Newsletter2.pdf" class="btn">Latest Issue</a> <a href="docs/Newsletter1.pdf" class="btn btn-1">Previous Issue</a> </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <Images_sequence />
      <h2><center>Our <b>Patrons</b></center></h2>
      <div className="container">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Ajit K. Chaturvedi"
              designation="Director, IIT Roorkee"
              image={director}
              link="https://www.iitr.ac.in/institute/pages/Director_IIT_Roorkee.html" />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Manoranjan Parida"
              designation="Dy Director, IIT Roorkee"
              image={mparida}
              link="https://www.iitr.ac.in/departments/CE/pages/People+Faculty+Parida_M_.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <IdentityCard name="Dr.Bhanu Prakash Vellanki"
              designation="Co-ordinator, UBA IIT Roorkee"
              image={bhanu}
              link="https://civil.iitr.ac.in/CE?Uid=bhanufce" />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Ashish Pandey"
              designation="Regional Cordinator, UBA"
              image={ap}
              link="https://www.iitr.ac.in/departments/WRT/pages/People+Faculty+ashisfwt.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2>Fresh From The <span>Blog</span></h2>
          <p>Work.  Innovation.  Fun.</p>
        </div>
        <div className="row mt-5 carousel-blog carousel">

          <ImageSlider />
        </div>
      </div>
      <Inspiration />
      {/* <!--======= PROUD =========--> */}
      <section class="proud">
        <h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2>
      </section>
    </>
  )
} 