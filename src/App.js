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
function App() {
  return (
    <Project/>
  );
}

export default App;
