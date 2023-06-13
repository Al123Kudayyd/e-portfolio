import Image from 'next/image'
import React from 'react'
import project from '../assests/project.png'
import project2 from '../assests/project2.png'


function Project() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>Here are some of my <span className='text-purple-500'>Projects.</span></h1>
        <div>
            <Image
            src={project}
            width={800}
            height={800}
            className='rounded-2xl'
            />
            <Image
            src={} 
            />
        </div>
    </div>
  )
}

export default Project