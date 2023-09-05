import React from 'react'
import image1 from '../../assests/Page 1/logo.png'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <div>
            <div><HeaderForPages name="Login|Register" /></div>
            <div className="login-page width-full py-10">
                <div className='py-10 bg-white w-full lg:w-3/6 md:w-4/6 rounded-3xl shadow-2xl mx-auto flex flex-col justify-center items-center'>
                    <img src={image1} className='pb-10' alt="" />
                    <form className='w-full mx-auto gap-3 flex flex-col justify-center items-center'>
                        <div className='text-center my-2'>
                            <h3 className='text-4xl my-0 py-0 text-blue-800 font-semibold tracking-wider mx-auto'>Reset Password</h3>
                            <span className='text-center text-gray-700 my-0 py-0'>
                                Please enter your email so you can <br /> send you a verification code
                            </span>
                        </div>
                        <input required type="password" className=' border-2 px-3 w-11/12 focus:border-blue-600 md:w-3/4 rounded-lg outline-none py-3' placeholder='Enter New Password' />
                        <input required type="password" className=' border-2 px-3 focus:border-blue-600 w-11/12 md:w-3/4 rounded-lg outline-none py-3' placeholder='Confirm Password' name="" id="" />
                        
                            <button className='bg-login hover:opacity-75 duration-200  w-10/12 md:w-2/3 my-5 md:my-10 py-3 rounded-lg text-lg text-white'>
                            <Link to="/medical-react-project" className=''>Reset Password</Link>
                            </button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword