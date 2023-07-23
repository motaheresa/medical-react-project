import React, { useContext, useState } from 'react'
import { creatcon } from '../context/Context'
import './SearchHeader.css'
import { BsFillSearchHeartFill } from 'react-icons/bs'
import SearchNotUnderstand from '../nav_in_small_screen/SearchNotUnderstand'
import { HiOutlineXMark } from 'react-icons/hi2'
const SearchHeader = () => {
    const usecon = useContext(creatcon)
    const [inputvlaue,setinput]=useState("")
    return (
        <div className={`absolute left-0 top-0 h-screen opacity-80 px-4 z-10 w-full flex justify-center items-center ${usecon.searchlargescreen?"ShowASearch":"HideASearch"}`}>
            <div className='absolute right-0 top-0 text-white text-3xl p-2 rounded-3xl m-3 hover:bg-red-500 cursor-pointer bg-gray-800' onClick={usecon.closesearchlargescreen_function}><HiOutlineXMark /></div>
            <div className=" border-b-2 border-gray-600 w-full px-4 flex justify-between ">
                <input type="text" placeholder='Type To Search' className=' input_search border-none w-5/6 bg-transparent py-3 px-2 outline-none text-2xl text-gray-900' value={inputvlaue} onChange={(e)=>setinput(e.target.value)} />
                <span className='text-2xl cursor-pointer' onClick={usecon.SearchNotUnderstand_Function}><BsFillSearchHeartFill /></span>
            </div>
            <SearchNotUnderstand/>
        </div>
    )
}
export default SearchHeader