import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold'>About <span className='text-purple-500'>Me.</span></h1>
        <div>
            <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            width={100}
            />
        </div>
        
    </div>
  )
}

export default AboutMe