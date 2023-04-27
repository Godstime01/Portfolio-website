import React, { useState, useEffect } from 'react';
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"

const Navbar = () => {

  const [background, setBackground] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      console.log(window)
      if (window.pageYOffset > 0) {
        setBackground("bg-black")
      } else {
        setBackground("bg-transparent")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  

  return (
    <nav className={`fixed w-full z-10 ${background}`}>
      <div className="container mx-auto px-4 py-5 flex justify-between item-center gap-4">
        <div></div>
        <div className='flex gap-2'>
          <a href="" className='text-white text-xl hover:text-red transition-colors'>Home</a>
          <a href="" className='text-white text-xl hover:text-red transition-colors'>About</a>
          <a href="" className='text-white text-xl hover:text-red transition-colors'>Portfolio</a>
        </div>
        <div className='flex gap-2'>
          <AiFillTwitterCircle style={{ fontSize: "2rem" }} />
          <AiFillGithub style={{ fontSize: "2rem" }} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar