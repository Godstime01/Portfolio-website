import React from 'react'

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mt-[5rem]">
        <h2 className="text-5xl my-4">About me</h2>

        <div className='flex items-center justify-between gap-2'>
          <div className='w-[50%]'>
            <p className='my-3'>
              Hello there! I'm Godstime, a frontend developer with a passion for creating beautiful and functional websites. I've worked on projects ranging from simple landing pages to complex web applications.
            </p>

            <p className='my-3'>
              My approach to development is grounded in user-centered design, and I'm constantly striving to create websites that are not only visually stunning but also intuitive and user-friendly. I'm experienced in HTML, CSS, JavaScript, and a variety of frontend frameworks, and I'm always eager to learn new technologies and tools to improve my craft.

              {/* I believe that good communication and collaboration are key to creating successful projects, and I work closely with my clients to ensure that their vision is brought to life in the final product. Whether you're looking for a complete website overhaul or just need a few tweaks here and there, I'm here to help.

              So if you're looking for a frontend developer who's passionate, creative, and dedicated to delivering the best possible results, then let's chat! I'd love to hear about your project and see how I can help bring it to life */}
            </p>
          </div>
          <div className='w-[50%] justify-self-end'>
            <img src="/images/illustration.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About