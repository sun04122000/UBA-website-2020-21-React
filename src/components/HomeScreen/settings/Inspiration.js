import React from 'react'
import './Inspiration.css'
import Carousel from 'react-elastic-carousel';
import imag from './images/Home/556x462.jpg'

const Inspiration = () => {
    return (
        <div>
            <section class="testi">
        <div className="container">
  
          {/* <!--======= ROW =========--> */}
          <div className="row">
            <div className="col-md-6">
              <h3><strong>Our </strong>Inspiration</h3>
  
              {/* <!--======= SLIDES =========--> */}
              <section>
  
                {/* <!--======= SLIDER =========--> */}
                <div className="testi-slides">
                    <Carousel renderArrow={""}>
                  {/* <!--======= SLIDER 1 =========--> */}
                  <div className="item-slide">
                    <p>You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.</p>
                    <h6><strong className="font-lora"> Mahatma Gandhi </strong></h6>
                  </div>
  
                  {/* <!--======= SLIDER 1 =========--> */}
                  <div className="item-slide">
                    <p>You never change things by fighting the existing reality.To change something, build a new model that makes the existing model obsolete.</p>
                    <h6><strong class="font-lora">R. Buckminster Fuller </strong> </h6>
                  </div>
  
                  {/* <!--======= SLIDER 1 =========--> */}
                  <div className="item-slide">
                    <p>Innvovation distinguishes between a leader and a follower.</p>
                    <h6><strong class="font-lora">Steve Jobs </strong> </h6>
                  </div>
                  </Carousel>
                </div>
              </section>
            </div>
  
            {/* <!--======= RIGHT IMAGES =========--> */}
            <div className="col-md-6 with-bg-drk"> <img className="img-responsive" src={imag} alt="" /> </div>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Inspiration
