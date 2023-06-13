import React, { useEffect, useRef, useState } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import emailjs from '@emailjs/browser';


function Contact() {
    const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_awa0p5t', 'template_s3chdi9', e.target, 'A6nJzYUpkG0siKVY7')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    const form = useRef();
    
    function load () {
        setLoading(true)
    }

    
    
    
  return (
    
    <div className='dark:bg-black dark:text-white py-20'>
        <h1 className='text-center font-bold text-5xl'>Get in <span className='text-purple-500'>Touch!</span></h1>
        <div className='flex justify-center'>
            <div className='shadow-[8px_8px_16px_15px_rgba(0,0,0,0.2)] mt-16 w-5/6 md:w-1/2 rounded-xl'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-center items-center my-5 '>
                <label className='border-2 border-[#dddada] w-3/4 mt-5'>
                    <input placeholder='Name' className='w-full dark:bg-black text-xl p-2 outline-none' type="text" name="user_name" />
                </label>
                <label className='border-2 border-[#dddada] w-3/4 my-5'>
                    <input placeholder='' type="email" name="user_email" />
                </label>
                
                <label>
                    <textarea name="message" />
                </label>
                <input type="submit" value="Send" />
            </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact