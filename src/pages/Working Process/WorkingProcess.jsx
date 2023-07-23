import React from "react";
import "./WorkingProcess.css";
import { IoIosArrowForward } from 'react-icons/io'

const WorkingProcess = () => {
    return (
        <div className="Working_Process px-5 py-10">
            <p className="working_process_header text-center m-auto font-semibold text-xl">
                Working Process
            </p>
            <h2 className="workingprocessh2 tracking-wider font-bold text-4xl  my-5 text-center block mx-auto">
                How we works?
            </h2>
            <ul className="flex items-center flex-wrap justify-center gap-5">
                <li className="li-working shadow-2xl px-6 rounded-2xl py-7 px-0">
                    <h2 className=" zx text-9xl font-black text-center">01</h2>
                    <p className="az my-7 text-2xl font-bold ">Make Appointmnet</p>
                    <p className="li-p ">
                        It is a long established fact that a reader will be distracted by
                        the readable content of.
                    </p>
                    <button className="btn-working flex items-center px-3 my-4 font-semibold py-2 rounded-lg">
                        View More
                        <span className="inbtn px-2 mx-2 py-2 bg-white radius text-2xl"><IoIosArrowForward /></span>
                    </button>
                </li>
                <li className="li-working  li-working2 shadow-2xl px-6 rounded-xl py-7 mb-10 px-5">
                    <h2 className=" zx text-9xl font-black text-white text-center">02</h2>
                    <p className="text-white my-7 text-2xl font-bold ">Take Treatment</p>
                    <p className="li-pspecial text-white">
                        It is a long established fact that a reader will be distracted by
                        the readable content of.
                    </p>
                    <button className="btn-working2 flex items-center px-3 my-4 font-semibold py-2 rounded-lg">
                        View More
                        <span className="inbtn2 px-2 mx-2 py-2 text-white radius text-2xl"><IoIosArrowForward /></span>
                    </button>
                </li>
                <li className="li-working shadow-2xl px-6 rounded-2xl py-7 px-5">
                    <h2 className=" zx text-9xl font-black text-center">03</h2>
                    <p className="az my-7 text-2xl font-bold ">Registration</p>
                    <p className="li-p ">
                        It is a long established fact that a reader will be distracted by
                        the readable content of.
                    </p>
                    <button className="btn-working flex items-center px-3 my-4 font-semibold py-2 rounded-lg">
                        View More
                        <span className="inbtn px-2 mx-2 py-2 bg-white radius text-2xl"><IoIosArrowForward /></span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WorkingProcess;
