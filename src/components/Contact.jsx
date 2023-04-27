import React from 'react';
import { AiFillMail, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"

const Contact = () => {

  const style = {
    "width" : 50,
    "height" : 50
  }

  return (
    <div className='container mx-auto px-4 text-center mt-[5rem] mb-[10rem]'>
      <h3 className="text-4xl my-5">Get in touch</h3>
      <div className="flex gap-3 items-center justify-center">
        <a href="https://twitter.com/mi6ixx" target='_blank'> <AiFillTwitterCircle style={style} /></a>
        <a href=""><AiFillInstagram style={style} /></a>
       <a href="https://www.github.com/godstime01" target='_blank'> <AiFillMail style={style} /></a>
      </div>
    </div>
  )
}

export default Contact