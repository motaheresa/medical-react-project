import React, { useEffect, useState } from 'react'
import image from "../../assests/Page3/animation_lm6juquf_small.gif"
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import { Navigate, useNavigate } from 'react-router-dom'
const ConfirmPassword = () => {
  // <Navigate to="../Booking/Booking.jsx" />
  const [status,useStaus]=useState(false)
  setTimeout(() => {
    console.log("asd")
  }, 2000);
  return (
    <div>
      <div className='h-screen flex items-center justify-center overflow-hidden'>
        <img className='w-96' src={image} alt="" />
      </div>
    </div>
  )
}

export default ConfirmPassword