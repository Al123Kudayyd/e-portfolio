import React from 'react'

function Contact() {
  return (
    <div>
        <h1 className='text-center '>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div className='shadow-2xl shadow-[gray]'>
            <form action="">
                <label>
                    <input type="name" placeholder='Name' />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Contact