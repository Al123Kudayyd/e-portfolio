import React from 'react'

function Contact() {
  return (
    <div className='dark:bg-black dark:text-white py-20'>
        <h1 className='text-center font-bold text-5xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div className='flex justify-center'>
            <div className='shadow-[8px_8px_16px_15px_rgba(0,0,0,0.2)] mt-16 w-1/2 rounded-xl'>
                <form action="" className='flex flex-col justify-center items-center my-5 '>
                    <label className='border-2 border-[#dddada] w-3/4 mt-5'>
                        <input type="name" placeholder='Name' className='w-full text-xl p-2 outline-none' />
                    </label>
                    <label className='border-2 border-[#dddada] w-3/4 my-5 '>
                        <input type="email" placeholder='Email' className='w-full text-xl p-2 outline-none' />
                    </label>
                    <label className='border-2 border-[#dddada] w-3/4 mb-5 h-40'>
                        <input type="text" placeholder='Message' className='w-full text-xl p-2 outline-none' />
                    </label>
                    <button className='bg-purple-500 border-purple-500 border-2 text-xl transition duration-300 w-3/4 mb-5 h-12 text-white font-bold hover:bg-white hover:text-purple-500'>
                        Send
                    </button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact