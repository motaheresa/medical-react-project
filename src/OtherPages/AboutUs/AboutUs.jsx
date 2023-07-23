import React from 'react'
import './AboutUs.css'
import HeaderForPages from '../../components/HeaderForPages/HeaderForPages'
import AboutUSCom3 from '../../components/AboutUSCom3/AboutUSCom3'
import About from '../../pages/About/About'
import AboutUSCom4 from '../../components/AboutUSCpm4/AboutUSCom4'
import Testimonial from '../../pages/Testimonial/Testimonial'
import News from '../../pages/News/News'
import NavBars from '../../components/nav/NavBars'


const AboutUs = () => {
    return (
        <div>
            <HeaderForPages name="About Us" />
            <About/>
            <AboutUSCom3/>
            <AboutUSCom4/>
            <Testimonial/>
            <News/>
        </div>
    )
}

export default AboutUs