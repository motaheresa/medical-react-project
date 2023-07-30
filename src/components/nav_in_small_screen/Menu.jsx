import React, { useContext } from 'react'
import { creatcon } from '../context/Context'
import logo2 from '../../assests/Page 1/logo2.png'
import { HiOutlineXMark } from 'react-icons/hi2'
import { FaFacebookF } from 'react-icons/fa6'
import { BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi'
import { AiOutlineGoogle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Menu = () => {
    const usecon=useContext(creatcon)
    const closeall=()=>{
        usecon.close_all_minmenu()
        usecon.closebarsfunction()
    }
    return (
        <div className={`relative ${usecon.openbars ? "ShowAllMenu" : "HideAllMenu"}`}>
            <div className='absolute right-0 text-white text-3xl p-2 rounded-3xl m-3 hover:bg-red-500 cursor-pointer bg-blue-500' onClick={closeall  }><HiOutlineXMark /></div>
            <img src={logo2} className='mx-auto text-white mt-20 mb-10' alt="" />
            <ul className='flex flex-col gap-4'>
                <Link onClick={usecon.closebarsfunction} to="/medical-react-project" className='border-color border-b-2 w-4/5 mx-auto text-left pb-2 border-b text-white text-xl font-semibold'>Home</Link>
                <li className='border-color border-b-2 w-4/5 mx-auto flex justify-between pb-3 border-b text-white text-xl font-semibold'>
                    <span>Pages</span>
                    <span className={`cursor-pointer plusmark `} onClick={usecon.open_minmenufunction}>{usecon.open_minmenu_one ? "-" : "+"}</span>
                </li >
                <ul className={`w-full pl-4 text-gray-400 flex flex-col justify-center ${usecon.open_minmenu_one ? "visible" : "hidden"}`}>
                    <Link onClick={usecon.closebarsfunction} to="/about" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>About Us</Link>
                    <Link onClick={usecon.closebarsfunction} to="/ourteam" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Our Team</Link>
                    <Link onClick={usecon.closebarsfunction} to="/faq" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>FAQ's</Link>
                    <Link onClick={usecon.closebarsfunction} to="/booking" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Booking</Link>
                    <Link onClick={usecon.closebarsfunction} to="/error" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Error 404</Link>
                    <Link  onClick={usecon.closebarsfunction} to="/login" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Login / Register</Link>
                </ul>
                <li className='border-color border-b-2 w-4/5 mx-auto text-left pb-2 border-b flex justify-between text-white text-xl font-semibold'>
                    <span>Services</span>
                    <span className={`cursor-pointer plusmark `} onClick={usecon.open_minmenufunctiontwo}>{usecon.open_minmenu_two ? "-" : "+"}</span>
                </li>
                <ul className={`w-full pl-4 text-gray-400 flex flex-col justify-center ${usecon.open_minmenu_two ? "visible" : "hidden"}`}>
                    <Link onClick={usecon.closebarsfunction} to="/service" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Service</Link>
                    <Link onClick={usecon.closebarsfunction} to="/servicedetail" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Service Detail</Link>
                </ul>
                <li className='border-color flex justify-between border-b-2 w-4/5 mx-auto text-left pb-2 border-b text-white text-xl font-semibold'>
                    <span>About</span>
                    <span className={`cursor-pointer plusmark `} onClick={usecon.open_minmenufunctionthree}>{usecon.open_minmenu_three ? "-" : "+"}</span>
                </li>
                <ul className={`w-full pl-4 text-gray-400 flex flex-col justify-center ${usecon.open_minmenu_three ? "visible" : "hidden"}`}>
                    <Link onClick={usecon.closebarsfunction} to="/blogs" className='cursor-pointer hover:text-blue-600 text-normal w-3/4 mx-auto font-normal tracking-wider border-color border-b-2 py-2'>Blogs</Link>
                </ul>
                <Link onClick={usecon.closebarsfunction} to="/contact" className='border-color border-b-2 w-4/5 mx-auto text-left pb-2 border-b text-white text-xl font-semibold'>Contact Us</Link>
            </ul>
            <ul className='flex justify-center absolute bottom-10 left-2/4 transform -translate-x-2/4 gap-3'>
                <li className='socailnavicons text-white text-4xl p-2 rounded-xl'><a href="https://www.facebook.com/profile.php?id=100036375496704" target="_blank"><FaFacebookF /></a></li>
                <li className='socailnavicons text-white text-4xl p-2 rounded-xl'><a href="https://www.facebook.com/profile.php?id=100036375496704" target="_blank"><BiLogoTwitter /></a></li>
                <li className='socailnavicons text-white text-4xl p-2 rounded-xl'><a href="https://www.linkedin.com/in/mohamed-taher-804672268" target="_blank"><AiOutlineGoogle /></a></li>
                <li className='socailnavicons text-white text-4xl p-2 rounded-xl'><a href="https://www.linkedin.com/in/mohamed-taher-804672268" target="_blank"><BiLogoLinkedin /></a></li>
            </ul>
        </div>
    )
}

export default Menu