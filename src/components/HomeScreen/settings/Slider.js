import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTwitter} from "react-icons/fa";


function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Vaibhav_Bansal.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa" /></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Vaibhav Bansal<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Pratibha_Deoraj.png" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa"/></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Pratibha Deoraj<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Roshan_Kumar.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa"/></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Roshan Kumar<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Vishvendra_Singh.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa"/></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Vishvendra Singh<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Aastha_Upadhyay.jpeg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa" /></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Aastha Upadhyay<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div> <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="carousel_images\Sarthak_Maheshwari.jpeg " />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><FaFacebookF className="fa"/></a></li>
                        <li><a href="#"><AiOutlineInstagram className="fa"/></a></li>
                        <li><a href="#">< FaTwitter className="fa"/></a></li>
                    </ul>
                    <div className="details">
                        <h2>Sarthak Maheshwari<span className="job-title">UBA,IIT ROORKEE</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default ImageSlider

//... is called spread operator

//thanks for watching
//pleae subscribe my channel