import React from 'react'
import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <div className='my-5 mx-10 flex just'>
        <FaBars className='flex md:hidden lg:hidden' />
        <ul className='flex space-x-5 items-center font-bold cursor-pointer justify-end text-xs sm:text-xl transition
        hover:'>
            <li>About Me</li>
            <li>My Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><MdOutlineModeNight className='text-2xl' /></li>
            
        </ul>
        
    </div>
  )
}

export default Nav