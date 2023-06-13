import Image from 'next/image'
import React from 'react'


function Project() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>Here are some of my <span className='text-purple-500'>Projects.</span></h1>
        <div>
            <Image
            src={'file:///Users/sammyandsamirahmed/Downloads/undraw_horror_movie_3988%20(1).svg'}
            width
            />
        </div>
    </div>
  )
}

export default Project