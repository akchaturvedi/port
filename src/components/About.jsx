import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
      
    <div className='max-w-screen-lg pl-4 pb-0 md:p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className='pb-2'>
            <p  className='text-4xl font-bold inline border-b-4  border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-0 md:mt-20'>I am Adesh Kumar Chaturvedi, currently pursuing my Bachelor of Technology in Computer Science and Information Technology at MJP Rohilkhand University, Bareilly. As a passionate web developer, I thrive on crafting seamless web experiences and solving intricate problems through code.</p>
        <br />
        <p className='text-xl'>
        Throughout my academic journey, I've delved deep into various facets of software development, honing my skills in both frontend and backend technologies. From conceptualizing user interfaces with HTML/CSS to building robust server-side applications with Node.js and Express.js, I find joy in every aspect of the development lifecycle.My proficiency extends beyond mere coding; I embrace collaboration, continuous learning, and innovation to deliver solutions that exceed expectations. I am particularly drawn to the dynamic nature of the MERN stack, where I can seamlessly integrate different technologies to build scalable and efficient applications. </p>
      </div>
    </div>
  )
}

export default About
