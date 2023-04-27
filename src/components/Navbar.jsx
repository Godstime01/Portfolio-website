import React, { useState, useEffect } from 'react';
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi";
import { TfiClose, TfiMenu } from "react-icons/tfi";

const Navbar = () => {

  const [background, setBackground] = useState("transparent");
  const [click, setClick] = useState(true);


  useEffect(() => {
    const handleScroll = () => {

      if (window.pageYOffset > 0) {
        setBackground("bg-black")
      } else {
        setBackground("bg-transparent")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  return (
    <nav className={`fixed w-full z-10 ${background}`}>
      <div className="container mx-auto px-4 py-5 flex justify-between item-center gap-4 ">
        {/* hamburger */}
        <button onClick={(e)=> setClick(!click)} className='inline md:hidden'>
          {
            click ? <TfiMenu style={{ color: "white", width: 50, height: 50 }} /> : <TfiClose style={{ color: "white", width: 50, height: 50 }} />
          }
        </button>

        <div></div>


        <div className='hidden md:flex'>
          <div className='flex gap-2'>
            <a href="/" className='text-white text-xl hover:text-red transition-colors'>Home</a>
            <a href="#about" className='text-white text-xl hover:text-red transition-colors'>About</a>
            <a href="#portfolio" className='text-white text-xl hover:text-red transition-colors'>Portfolio</a>
          </div>
          <div className='flex gap-2'>
            <a href="https://twitter.com/mi6ixx" target='_blank'>
            <AiFillTwitterCircle style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://www.github.com/godstime01" target='_blank'>
            <AiFillGithub style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar