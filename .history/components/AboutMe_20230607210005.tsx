import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold pt-10'>About <span className='text-purple-500'>Me.</span></h1>
        <div className='flex items-center justify-around mt-10'>
            <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            objectFit="cover"
            width={250}
            height={250}
            className='rounded-full'
            />
            <div className='flex-col pl-10 space-y-4 text-xl font-semibold'>
                <p>
                    Building <span>beautiful</span> , <span>customisable</span> and <span></span> responsive user <br /> experiences is my passion. I enjoy pushing myself to <br /> solve problems and creating solutions that positively affect people.
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