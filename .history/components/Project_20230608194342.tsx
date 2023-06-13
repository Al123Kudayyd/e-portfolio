import Image from 'next/image'
import React from 'react'
import project from '../assests/project.png'
import project2 from '../assests/project2.png'
import project3 from '../assests/project3.png'



function Project() {
  return (
    <div>
        <h1 className='text-center text-5xl mx-16 sm:mx- font-bold pt-10'>Here are some of my <span className='text-purple-500'>Projects.</span></h1>
        <div className='flex flex-col items-center'>
            <Image
            src={project}
            width={800}
            height={800}
            className='rounded-2xl my-20 shadow-[gray] shadow-2xl'
            />
            <Image
            src={project2}
            width={800}
            height={800}
            className='rounded-2xl shadow-[gray] mb-20 shadow-2xl'
            />
            <Image
            src={project3}
            width={800}
            height={800}
            className='rounded-2xl shadow-[gray] mb-20 shadow-2xl'
            />
        </div>
    </div>
  )
}

export default Project