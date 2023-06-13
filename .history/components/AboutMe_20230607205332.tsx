import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold pt-10'>About <span className='text-purple-500'>Me.</span></h1>
        <div className='flex items-center justify-around m'>
            <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            objectFit="cover"
            width={200}
            height={200}
            className='rounded-full'
            />
            <div className='flex-col pl-10'>
                <p>
                    Building beautiful, customisable and responsive user <br /> experiences is my passion. I enjoy pushing myself to <br /> solve problems and creating solutions that positively affect people.
                </p>

                <p>Currently, I am looking for an job as well as an intrnship <br /> to improve my experiences in frontend egineering.</p>

                <p>Check out my resume!</p>
                <button>Resume</button>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default AboutMe