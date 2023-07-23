import React from 'react'
import NavBars from '../nav/NavBars'
import { AiFillHome } from 'react-icons/ai'
import './HeaderForPages.css'
import NavBarSmallScreen from '../nav_in_small_screen/NavBarSmallScreen'


const HeaderForPages = ({ name }) => {
    return (
        <div className='about-us-all '>
            <div className='lg:flex hidden'><NavBars /></div>
            <div className='lg:hidden visible'><NavBarSmallScreen /></div>
            <div className="about-us-all-section flex flex-col justify-center items-center">
                <h2 className='HeaderForAll font-bold text-4xl md:text-7xl'>{name}</h2>
                <div className=' ShapeForAll flex items-center gap-2 text-xl md:text-2xl text-white py-3 px-5 rounded-xl my-5'>
                    <span><AiFillHome /></span>
                    <span className=''>Home / {name}</span>
                </div>
            </div>
        </div>
    )
}

export default HeaderForPages