import React from 'react'
import image1 from "../../assests/Page2/AboutUsimage1.jpg";
import image2 from "../../assests/Page2/backforback.png";
import image3 from '../../assests/Page2/AboutUsimage2.jpg'
import image4 from '../../assests/Page2/AboutUsimage3.jpg'
import image5 from '../../assests/Page2/AboutUsimage4.jpg'
import image6 from '../../assests/Page2/AboutUsimage5.jpg'
import image7 from '../../assests/Page2/AboutUsimage6.jpg'
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages';




const OurTeam = () => {
    return (
        <div>
            <HeaderForPages name="Our Team"/>
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
                <ul className="flex justify-center flex-wrap items-center py-10 gap-8">
            
                <li className="card about-us-ul-li px-8 py-5">
                    <div className="aboutimgdiv">
                        <img src={image4} className="aboutusimageli" alt="" />
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
                        <img src={image5} className="aboutusimageli" alt="" />
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
                        <img src={image6} className="aboutusimageli" alt="" />
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
    )
}

export default OurTeam