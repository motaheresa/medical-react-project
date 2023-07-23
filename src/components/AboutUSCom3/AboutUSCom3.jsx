import React from 'react'
import './AboutUSCom3.css'



const AboutUSCom3 = () => {
    return (
        <div className='about-us-section py-5'>
            <ul className='about-us-ul flex flex-wrap items-center justify-center py-10 gap-5'>
                <li className='AboutUSli shadow-2xl'>
                    <h2 className='text-5xl font-semibold num-h2-about-us'>120</h2>
                    <span className='block my-3 span-about-us-color'>Years With You</span>
                    <p className='p-about-us-color'>
                        Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
                    </p>
                </li>
                <li className='AboutUSli shadow-2xl'>
                    <h2 className='text-5xl font-semibold num-h2-about-us'>400</h2>
                    <span className='block my-3 span-about-us-color'>Awards</span>
                    <p className='p-about-us-color'>
                        Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
                    </p>
                </li>
                <li className='AboutUSli shadow-2xl'>
                    <h2 className='text-5xl font-semibold num-h2-about-us'>250</h2>
                    <span className='block my-3 span-about-us-color'>Doctors</span>
                    <p className='p-about-us-color'>
                        Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
                    </p>
                </li>
                <li className='AboutUSli shadow-2xl'>
                    <h2 className='text-5xl font-semibold num-h2-about-us'>800</h2>
                    <span className='block my-3 span-about-us-color'>Satisfied Client</span>
                    <p className='p-about-us-color'>
                        Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default AboutUSCom3