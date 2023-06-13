import React from 'react'
import { MdOutlineModeNight } from 'react-icons/'

function Nav() {
  return (
    <div>
        <ul>
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