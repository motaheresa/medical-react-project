import React, { useContext } from 'react'
import { HiOutlineXMark } from 'react-icons/hi2'
import { creatcon } from '../context/Context'
const SearchNotUnderstand = () => {
    const usecon=useContext(creatcon)
    
    return (
        <div className={`absolute left-0 top-0 h-screen w-full flex justify-center items-center z-20 bg-black  ${usecon.SearchNotUnderstand?"ShowAllSearchUnderStand":"HideAllSearchUnderStand"}`}>
            <div className='absolute z-30 w-5/6 h-1/4 bg-white shadow-2xl rounded-xl'>
                <div className='absolute right-0 text-white text-xl p-2 rounded-3xl m-3 hover:bg-red-500 cursor-pointer bg-gray-500' onClick={usecon.CloseSearchNotUnderstand_Function}>
                    <HiOutlineXMark />
                </div>
                <div className='flex h-full text-normal text-center justify-center items-center w-full'>
                    <p>!Sorry, your search contains mysterious words.</p>
                </div>
            </div>
        </div>
    )
}

export default SearchNotUnderstand