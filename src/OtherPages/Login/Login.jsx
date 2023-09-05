import React from 'react'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import './Login.css'
import image1 from '../../assests/Page 1/logo.png'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <div>
            <div><HeaderForPages name="Login|Register" /></div>
            <div className="login-page width-full py-10">
                <div className='py-10 bg-white w-full lg:w-3/6 md:w-4/6 rounded-3xl shadow-2xl mx-auto flex flex-col justify-center items-center'>
                    <img src={image1} className='pb-10' alt="" />
                    <form className='w-full mx-auto flex flex-col justify-center items-center'>
                        <input required type="text" className='my-2 border-2 px-3 w-11/12 md:w-3/4 rounded-lg outline-none py-3' placeholder='UserName' />
                        <input required type="password" className=' border-2 px-3 w-11/12 md:w-3/4 rounded-lg outline-none py-3' placeholder='Password' name="" id="" />
                        <button className='bg-login-page-3 w-10/12 md:w-2/3 my-5 md:my-10 py-3 rounded-lg text-lg text-white'>login</button>
                        <Link to="/forgetPassword" className='text-blue-600'>Forgot Password</Link>
                        <p className='mt-5 mb-2'>Don't have any account ?</p>
                    </form>
                    <button className='bg-login w-10/12 md:w-2/3 my-5 md:my-10 py-3 rounded-lg text-lg text-white'>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Login