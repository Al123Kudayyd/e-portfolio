import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center font-bold text-5xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div>
            <div className='shadow-2xl shadow-[black] mt-16 w-1/2'>
                <form action="" className='flex flex-col justify-center items-center'>
                    <label className='border-2 border-[#b4b3b3] w-1/3'>
                        <input type="name" placeholder='Name' className='w-full text-xl p-2' />
                    </label>
                    <label className='border-2 border-[#b4b3b3] w-1/3'>
                        <input type="email" placeholder='Email' className='w-full text-xl' />
                    </label>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact