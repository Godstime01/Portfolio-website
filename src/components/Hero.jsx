import React from 'react';
import {AiOutlineDownload} from "react-icons/ai"

const Hero = () => {
  return (
    <div className='h-[100vh] bg-[url(/images/hero-background.png)] bg-cover bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-black before:opacity-75'>
      <div className="container mx-auto h-full px-4 grid items-center justify-start md:justify-center grid-cols-1 gap-x-2 md:grid-cols-2 relative z-9 text-center md:text-left">
        <img src="/images/hero.png" alt="" />
        <div className="text-white">
          <h2 className='text-4xl'>Hello!</h2>
          <span className='text-blue'>I'm</span>
          <h1 className='text-4xl md:text-8xl'>Godstime</h1>
          <a href="" className='p-4 rounded bg-red text-white my-4 flex gap-2 items-center mx-auto md:mx-0 w-[250px] justify-center'>
            Download Resume 
          <AiOutlineDownload style = {{marginRight:"5px"}}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero