import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold'>About <span className='text-purple-500'>Me.</span></h1>
        <div>
            <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            objectFit="cover"
            width={200}
            height={200}
            className='round'
            />
        </div>
        
    </div>
  )
}

export default AboutMe