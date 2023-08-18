import React, { useContext, useState } from 'react'
import './NavBar.css'
import logo from '../../assests/Page 1/logo.png'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { creatcon } from '../context/Context'
import Search from '../nav_in_small_screen/SearchPage'
import SearchHeader from './SearchHeader'
import { Link } from 'react-router-dom'

const NavBars = () => {
    const usecon = useContext(creatcon)
    return (
        <div className='container flex items-center justify-evenly py-6 lg:flex hidden'>
            <img src={logo} alt="" />
            <ul className='flex gap-9'>
                <Link to="/medical-react-project" className='navbar-list active font-semibold tracking-wider cursor-pointer'>Home</Link>
                <li className='relative navbar-list flex items-center gap-1 cursor-pointer font-semibold tracking-wider' onMouseMove={usecon.ShowMenuHeader_Function} onMouseLeave={usecon.HideMenuHeader_Function}>Pages
                    <span className='plusheadermark text-gray-400'><AiOutlinePlus /></span>
                    <ul className={`absolute flex flex-col top-7 left-0 shadow-xl bg-white text-gray-400 gap-5 px-8 w-52 h-auto py-4 ${usecon.hover ? "ShowMenuHeader" : "HideMenuHeader"}`} >
                        <Link to="/medical-react-project" className='borderHover text-sm font-normal'>Home</Link>
                        <Link to="/about" className='borderHover text-sm font-normal'>About US</Link>
                        <Link to="/ourteam" className='borderHover text-sm font-normal'>Our Team</Link>
                        <Link to="/faq" className='borderHover text-sm font-normal'>Faq's</Link>
                        <Link to="/booking" className='borderHover text-sm font-normal'>Booking</Link>
                        <Link to="/error" className='borderHover text-sm font-normal'>Error 404</Link>
                        <Link to="/login" className='borderHover text-sm font-normal'>Login/Register</Link>
                    </ul>
                </li>
                <li className='navbar-list flex items-center gap-1 cursor-pointer relative font-semibold tracking-wider' onMouseMove={usecon.ShowMenuHeader_Function_Two} onMouseLeave={usecon.HideMenuHeader_Function_Two}>
                    Services
                    <span className='plusheadermark text-gray-400'><AiOutlinePlus /></span>
                    <ul className={`absolute flex flex-col top-7 left-0 shadow-xl bg-white text-gray-400 gap-5 px-8 w-52 h-auto py-4 ${usecon.hover_Two ? "ShowMenuHeader" : "HideMenuHeader"}`} >
                        <Link to="/service" className='borderHover text-sm font-normal'>Service</Link>
                        <Link to="/servicedetail" className='borderHover text-sm font-normal'>Service Details</Link>
                    </ul>
                </li>
                <li className='navbar-list flex items-center gap-1 relative cursor-pointer font-semibold tracking-wider' onMouseMove={usecon.ShowMenuHeader_Function_Three} onMouseLeave={usecon.HideMenuHeader_Function_Three}>
                    Blog
                    <span className='plusheadermark text-gray-400'><AiOutlinePlus /></span>
                    <ul className={`absolute flex flex-col top-7 left-0 shadow-xl bg-white text-gray-400 gap-5 px-8 w-52 h-auto py-4 ${usecon.hover_Three ? "ShowMenuHeader" : "HideMenuHeader"}`} >
                        <Link to="/blogs" className='borderHover text-sm font-normal'>Blog</Link>
                    </ul>
                </li>
                <Link to="/contact" className='navbar-list font-semibold cursor-pointer'>Contact Us</Link>
            </ul>
            <div className="flex items-center gap-6">
                <div className='searchiconheader text-2xl cursor-pointer' onClick={usecon.setsearchlargescreen_function}><BsFillSearchHeartFill /></div>
                <SearchHeader />
                <div className="flex items-center gap-1">
                    <div className='phoneheadericon p-3 rounded-xl '><a href="tel:+05890000111"><BsTelephoneFill /></a></div>
                    <div className='numberphone font-bold text-lg'><a href="tel:+05890000111">(+20) 0127 909 8049</a></div>
                </div>
            </div>
            <Link to="/contact">
                <div className='flex items-center gap-4 contactnavbar px-5 py-2 hover:bg-blue-800 duration-300 cursor-pointer rounded-xl'>
                    <button className='text-white text-lg font-normal '>CONTACT US</button>
                    <button className=' py-3 px-2 rounded-lg arrow-right_in_btn_navbar bg-white'><MdOutlineArrowForwardIos /></button>
                </div>
            </Link>
        </div>
    )
}

export default NavBars