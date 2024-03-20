import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Banner from './Components/Banner/Banner';
import AppStore from './Components/AppStore/AppStore';
import Testimonial from './Components/Testimonial/Testimonial';

const App = () => {
  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100,
    });
  });
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <Home />
        <Services />
        <Banner /> 
        <AppStore /> 
        <Testimonial />
    </div>
  )
}

export default App;
