import React from 'react'
import { useParams } from 'react-router-dom';
import data from "../data.json";

const SingleProject = () => {
    const {id} = useParams()

    const image = data[id].images[0]
  return (
    <div className='container mx-auto px-4 h-[100vh] flex items-center justify-center'>

       <div className="grid grid-cols-2 place-content-center gap-[5rem] text-white">
       <div>
            <img src={image} alt="" /> 
        </div>
        <div>
            <h2 className='text-4xl my-3'>{data[id].title}</h2>
            <p className='text-sm'>{data[id].desc}</p>

            <div className='flex gap-3 mt-3'>
            <a className = "bg-red text-white hover:border hover:border-red hover:bg-transparent mr-3 p-2" href={data[id].github_link}>View source code</a>
            <a className = "bg-red text-white hover:border hover:border-red hover:bg-transparent p-2" href={data[id].live_link}>LiveSite</a>
            </div>
        </div>
       </div>
        
    </div>
  )
}

export default SingleProject