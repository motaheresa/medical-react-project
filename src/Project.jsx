import React, { useContext } from 'react'
import NavBar from './components/nav/NavBars'
import NavBarSmallScreen from './components/nav_in_small_screen/NavBarSmallScreen';
import About from './pages/About/About';
import FormPage from './pages/FormPage/FormPage';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Services from './pages/Services/Services';
import Testimonial from './pages/Testimonial/Testimonial';
import WorkingProcess from './pages/Working Process/WorkingProcess';
import { creatcon } from './components/context/Context';



const Project = () => {
    const usecon = useContext(creatcon)
    return (
        <div className={`app ${usecon.searchlargescreen && "opacity-60"}`}>
            <div className='viewport'>
                <NavBar />
                <NavBarSmallScreen />
                <Home />
            </div>
            <div className='flex flex-col gap-5'>
                <About />
                <WorkingProcess />
                <FormPage />
                <Services />
                <Testimonial />
                <News />
            </div>
        </div>

    )
}

export default Project