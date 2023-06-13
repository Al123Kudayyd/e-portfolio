import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold pt-10'>About <span className='text-purple-500'>Me.</span></h1>
        <div className='flex items-center justify-center'>
            <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            objectFit="cover"
            width={200}
            height={200}
            className='rounded-full'
            />
            <p>Building beautiful, customisable and responsive user <br /> experiences is my passion. I enjoy pushing myself to <br /> solve problems and creating solutions that positively affect people.
            
            Check out my resume!</p>
        </div>
        
    </div>
  )
}

export default AboutMe