import React from "react";
import image1 from "../../assests/Page2/AboutUsimage1.jpg";
import image2 from "../../assests/Page2/backforback.png";
import image3 from '../../assests/Page2/AboutUsimage2.jpg'
import image4 from '../../assests/Page2/AboutUsimage3.jpg'
import "./AboutUSCom4.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'



const AboutUSCom4 = () => {
    return (
        <div className="py-10">
            <p className="Services-Header mx-auto  w-max px-3 py-1 text-lg tracking-wider font-bold">Our Doctor</p>
            <h2 className="ServicesH2 md:my-10 my-5 text-center text-2xl md:text-4xl font-bold">Meet Best Doctors</h2>
            <ul className="flex justify-center flex-wrap items-center py-10 gap-8">
                <li className="card about-us-ul-li px-8 py-5">
                    <div className="aboutimgdiv">
                        <img src={image1} className="aboutusimageli" alt="" />
                    </div>
                    <h2 className="namedoc mt-5 text-2xl text-center">Dr. Addition Smith</h2>
                    <p className="typedoc my-2 text-center">Dentist</p>
                    <div className=" py-10  gap-3 flex items-center justify-center">
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BiLogoFacebook /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BsTwitter /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><AiOutlineInstagram /></div>
                    </div>
                </li>
                <li className="card about-us-ul-li px-8 py-5">
                    <div className="aboutimgdiv">
                        <img src={image3} className="aboutusimageli" alt="" />
                    </div>
                    <h2 className="namedoc mt-5 text-2xl text-center">Dr. Mahfuz Riad</h2>
                    <p className="typedoc my-2 text-center">Cardiologist</p>
                    <div className="py-10 gap-3 flex items-center justify-center">
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BiLogoFacebook /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BsTwitter /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><AiOutlineInstagram /></div>
                    </div>
                </li>
                <li className="card about-us-ul-li px-8 py-5">
                    <div className="aboutimgdiv">
                        <img src={image4} className="aboutusimageli" alt="" />
                    </div>
                    <h2 className="namedoc mt-5 text-2xl text-center">Dr. David Benjamin</h2>
                    <p className="typedoc my-2 text-center">Cardiologist</p>
                    <div className="py-10 gap-3 flex items-center justify-center">
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BiLogoFacebook /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><BsTwitter /></div>
                        <div className="social-about-us-hover social-icon px-3 py-3 rounded-lg text-xl cursor-pointer"><AiOutlineInstagram /></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AboutUSCom4;
