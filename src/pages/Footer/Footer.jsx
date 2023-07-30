import React from "react";
import "./Footer.css";
import logo from "../../assests/Page 1/logo.png";
import { BsTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa6'
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineGoogle } from 'react-icons/ai'
import image1 from "../../assests/Page2/facebookfooter.png"
import image2 from "../../assests/Page2/linkedlinfooter.png"
import image3 from "../../assests/Page2/instafooter.png"
import image4 from "../../assests/Page2/twitterfooter.png"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section flex items-start flex-wrap justify-center mt-44 gap-4">
                <div className="footer-div1 py-8">
                    <img src={logo} alt="" className="w-2/4 " />
                    <p className="p-div1-footer my-8">
                        Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
                        smod tempor incididunt ut labore et.
                    </p>
                    <div className="contact-footer flex gap-4  items-center">
                        <div className="phone-div-footer">
                            <span className="phone-footer"><BsTelephoneFill /></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="span-contact-footer"><a href="tel:01279098049">Contact Us</a></span>
                            <span className="span-phone-footer"><a href="tel:01279098049">+20 0127 909 8049</a></span>
                        </div>
                    </div>
                </div>

                <div className="footer-div2 py-8">
                    <h2 className="quick-links-header">Quick Links</h2>
                    <ul className="my-8 quick-links flex mt-10 flex-col gap-2">
                        <Link className="borderHover" to="/medical-react-project">Home</Link>
                        <Link className="borderHover" to="service">Services</Link>
                        <Link className="borderHover" to="booking">Booking</Link>
                        <Link className="borderHover" to="faq">Faq's</Link>
                        <Link className="borderHover" to="blogs">Blogs</Link>
                        <Link className="borderHover" to="ourteam">Our Team</Link>
                    </ul>
                </div>
                <div className="footer-div3 py-8">
                    <h2 className="quick-links-header">Our Service</h2>
                    <ul className="my-8 quick-links flex mt-10 flex-col gap-2">
                        <Link className="borderHover" to="/medical-react-project">Dental Care</Link>
                        <Link className="borderHover" to="service">Cardiac Clinic</Link>
                        <Link className="borderHover" to="booking">Massege Therapy</Link>
                        <Link className="borderHover" to="faq">Cardiology</Link>
                        <Link className="borderHover" to="blogs">Precise Diagnosis</Link>
                        <Link className="borderHover" to="ourteam">Ambulance Services</Link>
                    </ul>
                </div>

                <div className="footer-div4 py-8">
                    <h2 className="quick-links-header">Subscribe</h2>
                    <div className="flex flex-col my-8">
                        <input type="text" className="bg-white shadow-2xl py-3 px-2 border-2 border-color-for-btn-footer rounded-lg outline-none" placeholder="Email Address" name="" id="" />
                        <button className="btn-footer px-1 py-3 text-white rounded-lg mt-4">Subscribe Now</button>
                    </div>
                    <ul className="flex">
                        <li className=' text-4xl p-2 rounded-xl'><a href="https://www.facebook.com/profile.php?id=100036375496704" target="_blank"><img src={image1} alt="" /></a></li>
                        <li className=' text-4xl p-2 rounded-xl'><a href="https://www.linkedin.com/in/mohamed-taher-804672268" target="_blank"><img src={image2} alt="" /></a></li>
                        <li className=' text-4xl p-2 rounded-xl'><a href="https://www.facebook.com/profile.php?id=100036375496704" target="_blank"><img src={image3} alt="" /></a></li>
                        <li className=' text-4xl p-2 rounded-xl'><a href="https://www.linkedin.com/in/mohamed-taher-804672268" target="_blank"><img src={image4} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright border-t-2 py-8">
                <p className="sm:text-lg text-normal text-center">Copyright © 2022 Design & Developed by <span className="copyright-name">Mo.Taher</span></p>
            </div>
        </div>
    );
};

export default Footer;
