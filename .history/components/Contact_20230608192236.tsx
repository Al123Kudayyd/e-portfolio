import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center font-bold text-5xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div className='flex justify-center'>
            <div className='shadow-[8px_35px_60px_15px_rgba(0,0,0,0.2)] mt-16 w-1/2 rounded-xl'>
                <form action="" className='flex flex-col justify-center items-center'>
                    <label className='border-2 border-[#dddada] w-1/2 mt-5'>
                        <input type="name" placeholder='Name' className='w-full text-xl p-2' />
                    </label>
                    <label className='border-2 border-[#dddada] w-1/2 my-5 '>
                        <input type="email" placeholder='Email' className='w-full text-xl p-2 rounded-xl' />
                    </label>
                    <label className='border-2 border-[#dddada] w-1/2 mb-5 '>
                        <input type="text" placeholder='Message' className='w-full text-xl p-2 rounded-xl' />
                    </label>
                    <button className='bg-purple-'>send</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact