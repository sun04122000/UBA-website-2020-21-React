import React from 'react'
import './css/Style.css';
// import './Responsive.css'
// import './Animate.css'
// import './Main.css'


export const Test = (props) => {
    return (
        <>
             {/* <!--======= CASES ROW =========--> */}

          {/* <!--======= Food kit Distribution =========--> */}
        <section> <img class="img-responsive" src="images/Beladi/CycleDonation/covid.jpg" alt=""/> 
          
          {/* <!--======= CASE PROGRESS BAR =========--> */}
          <div className="progress-bars">
            <div className="progress" data-percent="100%">
              <div className="progress-bar progress-bar-striped"> <span className=""> </span> </div>
            </div>
          </div>
          
          {/* <!--======= DONATION DETAILS =========--> */}
          <div className="donate-detail"> 
            {/* <!--======= DONATION =========--> */}
            
            <h6>{props.village} <span>{props.date}</span></h6>
    
            {/* <!--======= LINK =========-->  */}
            <a href="#." className="font-lora head">{props.init} </a>
            <hr/>
            <p>{props.initiative}</p>
          </div>
          {/* <!--======= DONATE BTN  =========-->  */}
          <a href="https://twitter.com/Director_IITR/status/1247944194284351488" class="btn-know">Know More</a>
        </section>
        </>
         )
}
