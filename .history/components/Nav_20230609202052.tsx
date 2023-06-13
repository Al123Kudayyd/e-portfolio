import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'

function Nav() {
  const [darkMode, setDarkMode] = useState<Boolean>(false)
  const [dark, setDark] = useState("light")

  useEffect(() => {
    if (dark === "theme") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  function changeMode() {
    setDarkMode(true)
  }

  function lightMode() {
    setDarkMode(false)
  }

  return (
    <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='py-5 mx-10 flex items-center justify-end font-bold cursor-pointer transition duration-300'>
        <FaBars className='flex md:hidden lg:hidden text-2xl hover:text-white transition duration-300' />
        <ul className='md:flex lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <a href="#about"><li className='hover:text-white transition duration-300'>About Me</li></a>
            <a href="#stack"><li className='hover:text-white transition duration-300'>My Skills</li></a>
            <a href="#projects"><li className='hover:text-white transition duration-300'>Projects</li></a>
            <a href="#contact"><li className='hover:text-white transition duration-300'>Contact</li></a>
            {
              darkMode ? <BsSun onClick={() => lightMode()} className='text-3xl hover:scale-110 transition' /> : <li><MdOutlineModeNight onClick={() => changeMode()} className='text-3xl hover:scale-110 transition' /></li>
            }
            
            
        </ul>
      </div>
    </section>
    
  )
}

export default Nav