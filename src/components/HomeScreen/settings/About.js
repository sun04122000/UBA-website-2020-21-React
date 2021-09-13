import React from 'react'
import img1 from './images/Meerpur/ICT_Meerpur/1.png'
import img2 from './images/Meerpur/ICT_Meerpur/2.png'
import img3 from './images/Meerpur/ICT_Meerpur/4.png'

import './about.css'
// import ReactCSSTransitionGroup from 'react-transition-group';

const About = () => {
    return (
        <div>
            <div className="container abouttop">
                <div className="row">
                    <div className="col-sm-12">
                        <section>


                            {/* <!--======= CASE PROGRESS BAR =========--> */}


                            {/* <!--======= DONATION DETAILS =========--> */}
                            <div className="donate-detail">

                                {/* <!--======= TITTLE =========--> */}

                                <h2><center> <strong>About UBA</strong></center></h2>
                                {/* <!--======= DONATIONINFO =========--> */}

                                {/* <!--======= DETSILS =========--> */}
                                <p style={{ textAlign: "justify" }}> <font size="4">Unnat Bharat Abhiyan is inspired by the vision of transformational change in rural development processes by leveraging knowledge institutions to help build the architecture of an Inclusive India. Its mission is conceptualized as a movement to enable processes that connect institutes of higher education with local communities to address the developmental challenges of rural India through participatory processes and appropriate technologies for accelerating sustainable growth. It also aims to create a virtuous cycle between the society and an inclusive university system by providing knowledge and practices for emerging professions and to upgrade the capabilities of both the public and the private sectors.
                                    <br /><br /> Under the aegis of UBA, IIT Roorkee has identified 8 villages namely Beladi-Salhapur, Chandpur-Khurd, Chandpur-Kala, Horawala, Chharba, Jhabarpur, Meerpur-Muwazarpur and Puranpur-Salhapur. The student team identifies problems persisting in the villages and proposes solutions pertaining to the fields including but not limited to sanitation & cleanliness, education, skill development, agriculture, physical infrastructure, social and institutional infrastructure. The team promotes alternative and eco-friendly methods of farming like organic farming, alternative energy sources like biogas in the villages. It also promotes various govt. schemes in the above-mentioned villages like the DELP scheme, MSBY of Uttarakhand, Skill India etc.
                                </font></p>

                            </div>
                        </section>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-0">

                    </div>
                    <div className="col-md-4 col-sm-10">
                        <p className="contenta" style={{ textAlign: "right", paddingTop: "20px" }}> <font size="4">

                            Thus ‘Students Initiative for Integrated Rural Development’ (SIIRD) was born within the fold of
                            the Knowledge Economy Project,awarded to IIT Roorkee by government of India in 2006 and emerged as its rural development vertical.
                        </font></p>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <img src={img1} className="img_history"></img>
                    </div>
                    <div className="col-md-4 col-sm-0">

                    </div>
                    <div className="col-md-1 col-sm-0">

                    </div>
                </div>
                <div className="row liner" >
                    <div className="col-md-12">
                        <div class="vertical1"></div>
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-1 col-sm-0">

                    </div>
                    <div className="col-md-4 col-sm-0">



                    </div>
                    <div className="col-sm-2">
                        <img src={img2} className="img_history"></img>
                    </div>
                    <div className="col-md-4 col-sm-10 ">
                        <p className="content2" style={{ textAlign: "left" }}> <font size="4">
                            Unnat Bharat Abhiyan is a project launched by the Ministry of Human Resources Development,
                            Government of India in December 2014, with an aim to leverage the technical knowhow of
                            premier educational institutions in the country and apply it in the rural milieu.
                        </font></p>
                    </div>
                    <div className="col-md-1 col-sm-0">

                    </div>
                </div>
                <div className="row liner">
                    <div className="col-md-12 col-sm-0">
                        <div class="vertical1"></div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-1 col-sm-0">

                    </div>
                    <div className="col-md-4 col-sm-10">
                        <p className="contentb" style={{ textAlign: "right", paddingTop: "25px" }}> <font size="4">
                            The modus operandi of UBA is very similar to the SIIRD model which focused on identification
                            of demand in a bottom-up approach rather than enforcing suppliers’ decisions in a top-down
                            one.

                        </font></p>
                    </div>
                    <div className="col-md-2 ">
                        <img src={img3} className="img_history"></img>
                    </div>
                    <div className="col-md-4 col-sm-0">

                    </div>
                    <div className="col-md-1 col-sm-0">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
