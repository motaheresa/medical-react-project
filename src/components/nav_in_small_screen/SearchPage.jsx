import React, { useContext, useState } from 'react'
import { creatcon } from '../context/Context'
import './NavBarSmallScreen.css'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import SearchNotUnderstand from './SearchNotUnderstand'
import { HiOutlineXMark } from 'react-icons/hi2'
const Search = () => {
    const usecon = useContext(creatcon)
    const [inputvlaue,setinput]=useState("")
    return (
        <div className={`absolute left-0 top-0 h-screen bg-gray-800 opacity-90 px-4 z-10 w-full flex justify-center items-center ${usecon.search?"ShowAllSearch":"HideAllSearch"}`}>
            <div className='absolute right-0 top-0 text-white text-3xl p-2 rounded-3xl m-3 hover:bg-red-500 cursor-pointer bg-gray-800' onClick={usecon.close_searchFunction}><HiOutlineXMark /></div>
            <div className=" border-b-2 border-gray-600 w-full px-4 flex justify-between ">
                <input type="text" placeholder='Type To Search' className=' input_search border-none w-5/6 bg-transparent py-3 px-2 outline-none text-2xl text-gray-200' value={inputvlaue} onChange={(e)=>setinput(e.target.value)} />
                <span className='text-2xl cursor-pointer text-gray-400' onClick={usecon.SearchNotUnderstand_Function}><BsFillSearchHeartFill /></span>
            </div>
            <SearchNotUnderstand/>
        </div>
    )
}
export default Search