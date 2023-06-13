import Image from 'next/image'
import React from 'react'
import project from '../assests/project.png'

function Project() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>Here are some of my <span className='text-purple-500'>Projects.</span></h1>
        <div>
            <a href=""><img src={project} alt="" /></a>
        </div>
    </div>
  )
}

export default Project