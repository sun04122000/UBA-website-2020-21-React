
import React from 'react'
import img1 from './images/Home/274img1.jpeg'
import img2 from './images/Home/274img2.jpg'
import img3 from './images/Home/274img3.JPG'
import img4 from './images/Home/274img4.jpg'
import img5 from './images/Home/274img5.jpg'

export const Images_sequence = () => {
    return (
        <>
    <section className="gallery">
      <ul className="simple">
        <li><a href="Puranpur_RepublicDay.html"> <img className="img-responsive" src={img1} alt="" /></a></li>
        <li><a href="Beladi_CycleDonation.html"> <img className="img-responsive" src={img2} alt="" /></a></li>
        <li><a href="Meerpur_IITRCampusVisit.html"> <img className="img-responsive" src={img3} alt="" /></a></li>
        <li><a href="Chandpur_Inspire.html"> <img className="img-responsive" src={img4} alt="" /></a></li>
        <li><a href="Beladi_TreePlantation.html"> <img className="img-responsive" src={img5} alt="" /></a></li>
      </ul>
    </section>
        </>
    )
}
