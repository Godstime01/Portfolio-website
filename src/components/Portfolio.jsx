import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import projects from "../data.json";

const Portfolio = () => {

  const navigate = useNavigate()

  return (
    <div id="portfolio" className='container mx-auto px-4 mt-[5rem]'>
      <h2 className='text-4xl my-4'>Project i've completed</h2>

      <p>

      </p>
      <div className="grid grid-cols-2 gap-2 grid-rows-2">
        {
          projects.map((project, index) => {
            return (<div key={index} className=' group shadow-sm rounded relative hover:before:h-full hover:before:w-full hover:before:bg-blue hover:before:text-white before:absolute transition-all'>
              <img src={ project.images[0] } className='w-full h-[300px] object-contain' alt="" />

              <Link to={`project/${index}`} className='uppercase bg-white text-blue text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hidden group-hover:inline-block p-5 rounded'>View project</Link>
            </div>)
          })
        }
      </div>
    </div>
  )
}

export default Portfolio