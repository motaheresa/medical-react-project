import React, { useState } from "react";
import './Services.css'
import UncontrolledExample from "./Services2";

const Services = () => {
    return (
        <div className="services py-8 md:py-12 mx-auto">
            <div className="section-services grid lg:grid-cols-2 items-center">
                <div className="section-services-left mx-auto w-5/6 lg:w-2/4">
                <p className="Services-Header w-min px-3 py-1 text-lg tracking-wider font-bold">Services</p>
                    <h2 className="ServicesH2 my-4 text-2xl md:text-4xl font-bold">We Cover A Big Variety Of Medical Services</h2>
                    <p className="ServicesText">
                        We provide the special tips and advice’s of heath care treatment and
                        high level of best.
                    </p>
                    <button className="my-5 btnServices px-8 hover:opacity-70 duration-300  text-white rounded-xl py-4">All Services</button>
                </div>
                <UncontrolledExample/>
                
            </div>
        </div>
    );
};

export default Services;
