import React from 'react'
import { MdOutlineModeNight } from 'react-icons/md'

function Nav() {
  return (
    <div>
        <ul className='flex space-x-3 items-center font-semibold justify-end text-2xl'>
            <li>About Me</li>
            <li>My Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li><MdOutlineModeNight /></li>
        </ul>
    </div>
  )
}

export default Nav