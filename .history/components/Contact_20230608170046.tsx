import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center font-bold text-4xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div className='shadow-2xl shadow-[gray]'>
            <form action="" className='flex justify-center'>
                <label className='border-2 border-[gray] rounded-md'>
                    <input type="name" placeholder='Name' />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Contact