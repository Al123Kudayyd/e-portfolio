import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

function Nav() {
  const [darkMode, setDarkMode] = useState<Boolean>(false)

  function 

  return (
    <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='py-5 mx-10 flex items-center justify-end font-bold cursor-pointer'>
        <FaBars className='flex md:hidden lg:hidden text-2xl hover:text-white transition duration-300' />
        <ul className='md:flex lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <li className='hover:text-white transition duration-300'>About Me</li>
            <li className='hover:text-white transition duration-300'>My Skills</li>
            <li className='hover:text-white transition duration-300'>Projects</li>
            <li className='hover:text-white transition duration-300'>Contact</li>
            <li><MdOutlineModeNight className='text-3xl hover:scale-110 transition' /></li>
            
        </ul>
      </div>
    </section>
    
  )
}

export default Nav