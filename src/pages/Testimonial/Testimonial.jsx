import React from "react";
import "./Testimonial.css";
import { PiQuotesFill } from 'react-icons/pi'
import image1 from "../../assests/Page2/Circle.png";
import image2 from "../../assests/Page2/doc5.jfif";
import image3 from "../../assests/Page2/doc6.jfif";
import image4 from "../../assests/Page2/doc7.jfif";
import image5 from "../../assests/Page2/doc8.jfif";
import image6 from "../../assests/Page2/doc9.jfif";
import image7 from "../../assests/Page2/doc10.jfif";

const Testimonial = () => {
    return (
        <div className="Testimonial py-10">
            <p className="testimonial-header">Testimonial</p>
                <h2 className="testimonial-header-h2">See What Are The Patients
                    Saying About us</h2>
            <div className="Testimonial-section grid lg:grid-cols-2 items-center justify-center">
                
                <div className="relative left-testimonial-section mx-auto">
                    <img src={image1} className="bn" alt="" />
                    <ul className="">
                        <li className="absolute top-0 left-48">
                            <img className="w-16 h-16 rounded-full" src={image2} alt="" />
                        </li>
                        <li className="absolute top-20 right-8">
                            <img className="w-16 h-16 rounded-full" src={image3} alt="" />
                        </li>
                        <li className="absolute bottom-2 left-48">
                            <img className="w-16 h-16 rounded-full" src={image4} alt="" />
                        </li>
                        <li className="absolute bottom-20 right-8">
                            <img className="w-16 h-16 rounded-full" src={image5} alt="" />
                        </li>
                        <li className="absolute bottom-20 left-8">
                            <img className="w-16 h-16 rounded-full" src={image6} alt="" />
                        </li>
                        <li className="absolute top-20 left-8">
                            <img className="w-16 h-16 rounded-full" src={image7} alt="" />
                        </li>
                    </ul>
                </div>
                <div class="testimonial-bx lg:w-4/6">
                    <div class="testimonial-content">
                        <p className="leading-loose w-full text-white mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                            ipsum suspendisse ultrices gravida. Risus commodo viverra maecena
                            ssuspendisse ultrices gravida.
                        </p>
                    </div>
                    <div class="client-info text-white my-2">
                        <h5 class="name text-white text-xl">Mohamed Taher</h5>
                        <p className="text-lg">Patient</p>
                    </div>
                    <div class="quote-icon">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <div className="quotes">
                        <PiQuotesFill />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
