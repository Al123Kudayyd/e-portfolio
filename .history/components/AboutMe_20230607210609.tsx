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
            className='rounded-full shadow-lg shadow-[black]'
            />
            <div className='flex-col pl-10 space-y-4 text-xl font-semibold'>
                <p>
                    Building <span className='text-purple-500'>beautiful</span> , <span className='text-purple-500'>customisable</span> and <span className='text-purple-500'>responsive user</span> <br /> experiences is my passion. I enjoy pushing myself to <br /> solve problems and creating solutions that positively affect people.
                </p>

                <p>Currently, I am looking for an <span className='text-purple-500'>job</span> as well as an internship <br /> to improve my experiences in <span className='text-purple-500'>frontend engineering</span>.</p>

                <p>Check out my resume!</p>
                <button className='bg-purple-500  px-16 py-2 text-white hover:bg-white hover:text-purple-500'>Resume</button>
            </div>
            
            
        </div>
        
    </div>
  )
}

export default AboutMe