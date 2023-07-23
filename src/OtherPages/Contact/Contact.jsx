import React from 'react'
import {
    Input,
    Textarea,
} from "@material-tailwind/react";
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages';
import './Contact.css'
import { ImProfile } from 'react-icons/im'
import { FaMapLocationDot } from 'react-icons/fa6';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import image1 from '../../assests/Page3/tele.png'
import image2 from '../../assests/Page3/email.png'
import image3 from '../../assests/Page3/loca.png'


const Contact = () => {
    return (
        <div className=''>
            <HeaderForPages name="Contact Us" />
            <div className="grid lg:grid-cols-2 gap-5 grid-cols-1 items-center my-10">
                <Card color="transparent" className='p-10 lg:w-fit md:w-3/4 sm:w-5/6 w-11/12 flex justify-center items-center flex-col mx-auto shadow-2xl'>
                    <Typography color="gray" className="text-2xl text-gray-400 mt-1 font-normal">
                        Enter your details to Submit.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" placeholder="Name" />
                            <Input size="lg" placeholder="Email" />
                            <Input size="lg" placeholder="Phone" />
                            <Input size="lg" placeholder="Department" />
                        </div>
                        <Textarea className='py-5' placeholder="Message" />
                        <button className='bg-orange-500 my-5 cursor-pointer text-white text-center w-full py-3 text-xl rounded-lg'>Submit</button>
                    </form>
                </Card>
                <div className="native mx-auto lg:w-fit md:w-3/4 sm:w-5/6 w-11/12 rounded-xl flex justify-start py-24 items-left px-10 flex-col text-xl font-semibold">
                    <h2 className='text-white text-2xl pb-10'>Contact Us For Any Informations</h2>
                    <ul className='flex flex-col gap-7 px-5'>
                        <li>
                            <p className='border-b-2 border-gray-400 w-full pb-1 mb-4 text-xl text-white flex items-center gap-4 justify-left'>
                                <span className='text-3xl'><FaMapLocationDot /></span>
                                <span>location</span>
                            </p>
                            <p className='text-sm'>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                        </li>

                        <li>
                            <p className='border-b-2 border-gray-400 w-full pb-1 mb-4 text-xl text-white flex items-center gap-4 justify-left'>
                                <span className='text-3xl'><ImProfile /></span>
                                <span>Email & Phone</span>
                            </p>
                            <p className='text-sm'>Email: MoTaher2004@gmail.com</p>
                            <p className='text-sm'>Phone: (+20) 0127 909 8049</p>
                        </li>
                        <li>
                            <p className='border-b-2 border-gray-400 w-full pb-1 mb-4 text-xl text-white flex items-center gap-4 justify-left'>
                                <span className='text-3xl'><AiOutlineGlobal /></span>
                                <span>Follow Us</span>
                            </p>
                            <ul className='flex gap-3 '>
                                <li className='px-2 py-2 text-blue-900 text-xl rounded-lg bg-white cursor-pointer hover:bg-orange-400 hover:text-white'><BiLogoTwitter /></li>
                                <li className='px-2 py-2 text-blue-900 text-xl rounded-lg bg-white cursor-pointer hover:bg-orange-400 hover:text-white'><BiLogoFacebook /></li>
                                <li className='px-2 py-2 text-blue-900 text-xl rounded-lg bg-white cursor-pointer hover:bg-orange-400 hover:text-white'><BiLogoLinkedin /></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:mx-24 mx-8 sm:mx-12 my-14 lg:mx-44">
                <Card className="mt-6 border border-lime-600">
                    <CardBody>
                        <img src={image1} className="text-blue-500 w-12 h-12 mb-4" alt="" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Contact Number
                        </Typography>
                        <Typography className="text-gray-500">
                            Number: +20 0127 909 8049
                        </Typography>
                        <Typography className="text-gray-500">
                            Whats App: +20 0127 909 8049
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 border border-amber-600 shadow-lg">
                    <CardBody>
                        <img src={image2} alt="" className="text-blue-500 w-12 h-12 mb-4" />
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Email Address
                        </Typography>
                        <Typography className="text-gray-500">
                            MoTaher2004@gmail.com
                        </Typography>
                        <Typography className="text-gray-500">
                            kdkrkrkrkiejer@gmail.com
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
                <Card className="mt-6 border border-blue-700">
                    <CardBody>
                        <img src={image3} alt="" className="text-blue-500 w-12 h-12 mb-4"/>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Address
                        </Typography>
                        <Typography>
                            2005 Stokes Isle Apt. 896, Banha
                        </Typography>
                        <Typography>
                            10010, EGY
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <a href="#" className="inline-block">
                            <Button size="sm" variant="text" className="flex items-center gap-2">
                                Learn More
                                <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                            </Button>
                        </a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Contact