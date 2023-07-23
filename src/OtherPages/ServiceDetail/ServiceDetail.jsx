import { Button, Checkbox, Popover, PopoverHandler, PopoverContent, Slider } from "@material-tailwind/react";
import React from "react";
import "./ServiceDetail.css";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import HeaderForPages from "../../components/HeaderForPages/HeaderForPages";
import { FaArrowRight } from "react-icons/fa6";
import image1 from '../../assests/Page3/pdfimage.png'
import image2 from '../../assests/Page3/docimage.png'

const ServiceDetail = () => {
    return (
        <div>
            <HeaderForPages name="Service Details" />
            <div className="grid lg:grid-cols-3 flex-cols-1 items-center my-10 gap-5 lg:items-start justify-center">
                <div className="service-detail-left lg:col-span-2 mx-auto lg:ml-auto w-11/12 md:w-3/4">
                    <img
                        src="https://meditro.themetrades.com/react/static/media/pic1.5a7f5c08a94b8b308c29.jpg"
                        alt=""
                        className="w-full object-cover rounded-xl"
                    />
                    <h2 className="text-4xl my-5 font-semibold">
                        Why Medical Had Been So Popular Till
                    </h2>
                    <p className="text-gray-600 text-md">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book
                    </p>
                    <div className="flex lg:flex-row flex-col items-start h-full justify-between my-10">
                        <ul className="ul-service-detail flex flex-col items-center">
                            <li className="flex items-center">
                                <span className="text-6xl text-blue-600 overflow-hidden">
                                    <BiSolidCheckboxChecked className="" />
                                </span>
                                <p>Then along come two they</p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-6xl text-blue-600 overflow-hidden">
                                    <BiSolidCheckboxChecked className="" />
                                </span>
                                <p>Then along come two they</p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-6xl text-blue-600 overflow-hidden">
                                    <BiSolidCheckboxChecked className="" />
                                </span>
                                <p>Then along come two they</p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-6xl text-blue-600 overflow-hidden">
                                    <BiSolidCheckboxChecked className="" />
                                </span>
                                <p>Then along come two they</p>
                            </li>
                            <li className="flex items-center">
                                <span className="text-6xl text-blue-600 overflow-hidden">
                                    <BiSolidCheckboxChecked className="" />
                                </span>
                                <p>Then along come two they</p>
                            </li>
                        </ul>
                        <ul className=" lg:flex hidden flex-col gap-10 h-full">
                            <li className="flex flex-col justify-center items-start gap-1">
                                <p className="text-blue-900 text-lg font-semibold">
                                    Advanced Technology
                                </p>
                                <div className="side1 w-full ">
                                    <span className="side2 absolute right-0 rounded-lg top-0 h-full w-1/4 text-left bg-gray-400"></span>
                                    <span className="absolute my-1 font-bold bottom-full left-3/4 text-blue-800">
                                        75%
                                    </span>
                                    <span className="side3 absolute rounded-full -top-2 -bottom-2 left-3/4 w-6  bg-white border-blue-800 border-4"></span>
                                </div>
                            </li>
                            <li className="flex flex-col justify-center items-start gap-1">
                                <p className="text-blue-900 text-lg font-semibold">
                                    Certified Engineers
                                </p>
                                <div className="side1 w-full ">
                                    <span className="side2 absolute right-0 rounded-lg top-0 h-full w-2/4 text-left bg-gray-400"></span>
                                    <span className="absolute my-1 font-bold bottom-full left-2/4 text-blue-800">
                                        50%
                                    </span>
                                    <span className="side3 absolute rounded-full -top-2 -bottom-2 left-2/4 w-6  bg-white border-blue-800 border-4"></span>
                                </div>
                            </li>
                            <li>
                                <p className="text-blue-900 text-lg font-semibold">
                                    6 years Experience
                                </p>
                                <div className="side1 w-full">
                                    <span className="side2 absolute right-0 rounded-lg top-0 h-full w-2/4 text-left bg-gray-400"></span>
                                    <span className="absolute my-1 font-bold bottom-full left-2/4 text-blue-800">
                                        50%
                                    </span>
                                    <span className="side3 absolute rounded-full -top-2 -bottom-2 left-2/4 w-6  bg-white border-blue-800 border-4"></span>
                                </div>
                            </li>
                            <li>
                                <p className="text-blue-900 text-lg font-semibold">
                                    3 years Experience
                                </p>
                                <div className="side1 w-full">
                                    <span className="side2 absolute right-0 rounded-lg top-0 h-full w-1/3 text-left bg-gray-400"></span>
                                    <span className="absolute my-1 font-bold bottom-full left-2/3 text-blue-800">
                                        70%
                                    </span>
                                    <span className="side3 absolute rounded-full -top-2 -bottom-2 left-2/3 w-6  bg-white border-blue-800 border-4"></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <h2 className="text-blue-900 font-semibold text-2xl">Popular Questions</h2>
                    <p className="text-gray-600 text-md my-5 md:m-5">
                        Standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book
                    </p>
                    <div className="flex flex-col w-full items-center justify-center gap-2">
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Button className="btn-tail-detail w-full py-5 text-left flex items-center justify-between">
                                    <span>How Doctor Can Ease Your Pain?</span>
                                    <span><AiFillCaretDown /></span>
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="absolute z-10 border-2 py-4 text-gray-600 font-normal text-md text-left left-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-2/5 px-6 tracking-wider">
                                <div className="w-full">
                                    <p className="w-full">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Button className="btn-tail-detail w-full py-5 text-left flex items-center justify-between">
                                    <span>How do I withdraw from a subject?</span>
                                    <span><AiFillCaretDown /></span>
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="absolute z-10 border-2 py-4 text-gray-600 font-normal text-md text-left left-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-2/5 px-6 tracking-wider">
                                <div className="w-full">
                                    <p className="">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Button className="btn-tail-detail w-full py-5 text-left flex items-center justify-between">
                                    <span>Understand Doctor Before You Regret?</span>
                                    <span><AiFillCaretDown /></span>
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="absolute z-10 border-2 py-4 text-gray-600 font-normal text-md text-left left-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-2/5 px-6 tracking-wider">
                                <div className="w-full">
                                    <p className="">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover placement="bottom">
                            <PopoverHandler>
                                <Button className="btn-tail-detail w-full py-5 text-left flex items-center justify-between">
                                    <span>What types of systems do you support?</span>
                                    <span><AiFillCaretDown /></span>
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="absolute z-10 border-2 py-4 text-gray-600 font-normal text-md text-left left-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-2/5 px-6 tracking-wider">
                                <div className="w-full">
                                    <p className="">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </PopoverContent>
                        </Popover>
                        <Popover placement="bottom relative">
                            <PopoverHandler>
                                <Button className="btn-tail-detail w-full py-5 text-left flex items-center justify-between">
                                    <span>We Teach You How To Feel Better?</span>
                                    <span><AiFillCaretDown /></span>
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="absolute z-10 border-2 py-4 text-gray-600 font-normal text-md text-left left-0 w-5/6 sm:w-5/6 md:w-4/6 lg:w-2/5 px-6 tracking-wider">
                                <div className="w-full">
                                    <p className="">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="h-full relative">
                    <div className="service-detail-right flex items-center lg:items-start lg:ml-10 sticky top-8 cursor-pointer gap-10 flex-col lg:col-span-1">
                        <div className="flex flex-col gap-2 px-5  rounded-lg shadow-lg py-10 w-11/12 md:w-3/4 border-2">
                            <Button className="text-left flex items-center justify-between bg-orange-400">
                                <span>Engine Diagnostics</span>
                                <button className="px-2 rounded-lg text-2xl py-1 text-orange-400 bg-white"><FaArrowRight /></button>
                            </Button>
                            <Button className="hover:bg-orange-400 duration-150 btn-tail-detail text-left flex items-center justify-between">
                                <span>Lube Oil And Filters</span>
                                <span><button className="px-2 rounded-lg text-2xl py-1 bg-white btn-tail-detail-color"><FaArrowRight /></button></span>
                            </Button>
                            <Button className="hover:bg-orange-400 duration-150 btn-tail-detail text-left flex items-center justify-between">
                                <span>Belts And Hoses</span>
                                <button className=" px-2 rounded-lg text-2xl py-1 bg-white btn-tail-detail-color"><FaArrowRight /></button>
                            </Button>
                            <Button className="hover:bg-orange-400 duration-150  btn-tail-detail text-left flex items-center justify-between">
                                <span>Air Conditioning</span>
                                <button className=" px-2 rounded-lg text-2xl py-1 bg-white btn-tail-detail-color"><FaArrowRight /></button>
                            </Button>
                            <Button className="hover:bg-orange-400 duration-150  btn-tail-detail text-left flex items-center justify-between">
                                <span>Brake Repair</span>
                                <button className=" px-2 rounded-lg text-2xl py-1 bg-white btn-tail-detail-color"><FaArrowRight /></button>
                            </Button>
                            <Button className="hover:bg-orange-400 duration-150  btn-tail-detail text-left flex items-center justify-between">
                                <span>Tire And Wheel Services</span>
                                <button className=" px-2 rounded-lg text-2xl py-1 bg-white btn-tail-detail-color"><FaArrowRight /></button>
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2 px-5 rounded-lg shadow-lg py-10 w-11/12 md:w-3/4 border-2">
                            <div className="flex cursor-pointer rounded-lg items-center justify-between py-4 px-6 btn-tail-detail">
                                <img src={image1} alt="" className="w-10" />
                                <div className="flex flex-col">
                                    <p className="text-white">Download our Brochures</p>
                                    <span className="text-white">Download</span>
                                </div>
                            </div>
                            <div className="flex cursor-pointer rounded-lg items-center justify-between py-4 px-6 btn-tail-detail">
                                <img src={image2} alt="" className="w-10" />
                                <div className="flex flex-col">
                                    <p className="text-white">Download our Brochures</p>
                                    <span className="text-white">Download</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
