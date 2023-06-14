import Image from 'next/image'
import { type } from 'os'
import React from 'react'

function AboutMe() {

    interface Props {
      width: number,
      height: number
      className: string
    }

  return (
    <div className="p-10 dark:bg-[#0b0b0b] dark:text-white">
        <h1 className='text-center text-5xl font-bold'>About <span className='text-purple-500'>Me.</span></h1>
        <div className='grid grid-cols-1 md:grid md:grid-cols-2 items-center justify-center p-10'>
            <Image 
            src={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}
            objectFit="cover"
            width={300}
            height={300}
            className='rounded-full shadow-lg shadow-[black] sm:mx-10 my-5'
            />
            <div className=' pl-10 space-y-4 text-xl font-semibold'>
                <p>
                    Building <span className='text-purple-500'>beautiful</span> , <span className='text-purple-500'>customisable</span> and <span className='text-purple-500'>responsive user</span> 
                    <br /> experiences is my passion. I enjoy pushing myself to 
                    <br /> solve problems and creating solutions that positively affect people.
                </p>

                <p>Currently, I am looking for an <span className='text-purple-500'>job</span> as well as an internship <br /> to improve my experiences in <span className='text-purple-500'>frontend engineering</span>.</p>

                <p>Check out my resume!</p>
                <button className='bg-purple-500 border-purple-500 border-2 px-16 py-2 text-white dark:hover:bg-transparent hover:bg-white hover:text-purple-500 transition duration-300'>
                  <a onClick={() => alert('contact me for more info')}>Resume</a>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe