import React from 'react'
import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <div className='my-5 mx-10 flex items-center justify-end font-bold cursor-pointer'>
        <FaBars className='flex md:hidden lg:hidden text-2xl' />
        <ul className='md:flex lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <li className='hover:text-purple-500 transition-[0.8s]'>About Me</li>
            <li className='hover:text-purple-500 transition-[0.8s]'>My Skills</li>
            <li className='hover:text-purple-500 transition-[0.8s]'>Projects</li>
            <li className='hover:text-purple-500 transition-[0.8s]'>Contact</li>
            <li><MdOutlineModeNight className='text-2xl hover:scale-100 transition' /></li>
            
        </ul>
        
    </div>
  )
}

export default Nav