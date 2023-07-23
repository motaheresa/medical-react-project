import React from 'react'
import './Home.css'
import image from "../../assests/Page 1/doc 1.png"
import image2 from '../../assests/Page 1/+.png'
import image3 from '../../assests/Page 1/square.png'
import image4 from '../../assests/Page 1/mothalth.png'
import image5 from '../../assests/Page 1/zgzag.png'
const Home = () => {
    return (
        <div className='home'>
            <div className="home-section flex flex-col md:flex-row justify-center mt-10 md:justify-between mx-0 md:mx-4 lg:mx-44 ">
                <img src={image2} className='absolute bottom-24 left-2/4 image2_viewport hidden lg:flex' alt="" />
                <img src={image3} alt="" className='absolute top-44 right-1/3 image2_viewport hidden lg:flex' />
                <img src={image4} alt="" className='absolute bottom-72 left-10 image2_viewport hidden lg:flex' />
                <div className="home-content-left md:w-3/5 md:self-center self-left  ml-5 w-5/6">
                    <p className='background-for-p md:text-2xl text-lg md:px-3 font-normal md:font-semibold w-full md:w-3/4'>We Provide All Health Care Solution</p>
                    <h2 className=' h2 md:text-5xl text-2xl mb-10 mt-5  font-bold tracking-wide'>Protect Your Health And Take Care To Of Your Health</h2>
                    <button className='btn px-10 text-lg text-white py-3 hover:opacity-80 rounded-xl'>Read More</button>
                </div>
                < div className="home-content-right relative">
                    <div className=''>
                        <img src={image5} className='zgzag absolute bottom-0 hidden lg:flex right-10' alt="" />
                    </div>
                        <img src={image} className='doc1 z-50 mx-auto' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home