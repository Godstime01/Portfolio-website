import React from 'react';
import { AiFillMail, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"

const Contact = () => {

  const style = {
    "width" : 50,
    "height" : 50
  }

  return (
    <div className='container mx-auto px-4 text-center mt-[5rem]'>
      <h3 className="text-4xl my-5">Get in touch</h3>
      <div className="flex gap-3 items-center justify-center">
        <AiFillTwitterCircle style={style} />
        <AiFillInstagram style={style} />
        <AiFillMail style={style} />
      </div>
    </div>
  )
}

export default Contact