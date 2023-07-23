import React from 'react'
import './NavBarSmallScreen.css'
import logo from '../../assests/Page 1/logo.png'
import { HiMiniBarsArrowDown } from 'react-icons/hi2'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import { useContext } from 'react'
import { creatcon } from '../context/Context'
import Menu from './Menu'
import Search from './SearchPage'
const NavBarSmallScreen = () => {
    const usecon = useContext(creatcon)
    console.log(usecon)
    return (
        <>
            <div className={`navbar_small flex items-center justify-between lg:hidden py-8 px-5 `}>
                <img src={logo} className='md:w-auto w-44' alt="" />
                <div className="flex gap-6">
                    <div className='searchiconheader text-2xl cursor-pointer' onClick={usecon.open_searchFunction}><BsFillSearchHeartFill /></div>
                    <div className='searchiconheader text-4xl cursor-pointer' onClick={usecon.openbarsfunction}><HiMiniBarsArrowDown /></div>
                    <Menu/>
                    <Search/>
                </div>
            </div>

        </>
    )
}

export default NavBarSmallScreen