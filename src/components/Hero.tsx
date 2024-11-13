import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat  bg-[url(/banner_bg.jpg)]  bg-cover'
   style={{backgroundSize:"25%",backgroundPosition:"left 100px top 100px"} }
    > 
    <Navbar/> 
    <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[70px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
      <div>

        <p data-aos="zoom-in-down">I am</p>
        <p  data-aos="zoom-in-down">Mehwish</p>
        <p data-aos="zoom-in-down">Mazari</p>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Hero
