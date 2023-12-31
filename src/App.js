import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Project';
import Footer from './pages/Footer/Footer';
import AboutUs from './OtherPages/AboutUs/AboutUs';
import OurTeam from './OtherPages/Our Team/OurTeam';
import Faq from './OtherPages/Faq\'s/Faq';
import Booking from './OtherPages/Booking/Booking';
import Error from './OtherPages/Error404/Error';
import Login from './OtherPages/Login/Login';
import Service from './OtherPages/Service/Service';
import ServiceDetail from './OtherPages/ServiceDetail/ServiceDetail';
import Home from './pages/Home/Home';
import Blogs from './OtherPages/Blogs/Blogs';
import Contact from './OtherPages/Contact/Contact';
import NavBars from './components/nav/NavBars';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import ConfirmPassword from './OtherPages/ConfirmPassword/ConfirmPassword';
// import ForgetPassword from './OtherPages/ForgetPassword/ForgetPassword';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/medical-react-project' element={<Project />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/ourteam' element={<OurTeam />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/error' element={<Error />} />
        <Route path='/login' element={<Login />} />
        <Route path='/service' element={<Service />} />
        <Route path='/servicedetail' element={<ServiceDetail />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/forgetPassword' element={<ForgetPassword/>}/>
        <Route path='/confirmPassword' element={<ConfirmPassword/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
