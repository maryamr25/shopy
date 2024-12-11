import React from 'react'
import { Link } from 'react-router-dom'


function About() {
    
  return (
    <div className='bg-gradient-to-r from-primary to-secondary transition-all duration-200  text-white'>
    <div className=" grid grid-flow-col grid-rows-1 grid-cols-3 gap-6 p-9 sm:p-20 sm:mt-8 mx-auto my-auto">
         {/* <div className='text-center text-3xl font-bold text-'>
        <h1 >70% off on all Products Sale</h1>
    </div> */}
    <div className=" col-start-1 transform scale-5 -rotate-6">
      <img src="/braslate.jpg" alt="1" />
    </div>
   
    <div className="  col-start-3 transform scale-5 rotate-6 translate-x-2 translate-y-15">
      <img src="/women3.jpg" alt="2" />
    </div>
    <div className='text-center font-bold  col-start-2 transform scale-5 rotate-1 translate-x-2 translate-y-15"'>
        <h1 className='text-3xl'>70% off on all Products Sale</h1>
        <p className='text-xl my-4'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.,</p>
    </div>


    
  </div>
  <div className='flex justify-center mb-20'>
    <Link to={'/products'} className=" bg-white transition-all duration-200 text-black font-bold py-2 px-4 rounded-full flex items-center  group cursor-pointer  mb-10">Shop Now</Link>
  </div>
  
  </div>
  )
}

export default About