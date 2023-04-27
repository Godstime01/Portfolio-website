import React from 'react';
import {AiOutlineDownload} from "react-icons/ai";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
    className='h-[100vh] bg-[url(/images/hero-background.png)]  bg-center bg-cover bg-no-repeat relative before:absolute before:w-full before:h-full before:bg-black before:opacity-75'

    >
      <div className="container mx-auto h-full px-4 grid items-center justify-start md:justify-center grid-cols-1 gap-x-2 md:grid-cols-2 relative z-9 text-center md:text-left">
        <motion.img
        src="/images/hero.png" alt=""
        initial = {{x: -200, opacity: 0}}
        animate = {{ x: 0 , opacity: 1}}
        transition={{delay : .5, duration: 3}}
        />
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition={{delay : 1, duration: 5}}
        className="text-white">
          <h2 className='text-4xl'>Hello!</h2>
          <span className='text-blue'>I'm</span>
          <h1 className='text-4xl md:text-8xl'>Godstime</h1>
          <motion.a
          whileHover={{scale: 1.1}}
          href="" className='p-4 rounded bg-red text-white my-4 flex gap-2 items-center mx-auto md:mx-0 w-[250px] justify-center'>
            Download Resume 
          <AiOutlineDownload style = {{marginRight:"5px"}}/>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero