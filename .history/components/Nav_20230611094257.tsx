import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { BsSun } from 'react-icons/bs'

function Nav() {
  const [darkMode, setDarkMode] = useState<Boolean>(false)
  const [dark, setDark] = useState("light")
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  const handleCLick = () => {
    setDark(dark === "dark" ? "light" : "dark")
  }

  function changeMode() {
    setDarkMode(!darkMode)
  }

  

  return (
    <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='py-5 mx-10 flex items-center justify-end font-bold cursor-pointer transition duration-300'>
        <FaBars onClick={() => setModal(true)} className='flex md:hidden lg:hidden text-2xl hover:text-white transition duration-300' />
        {
          modal && 
          <div className=''>
            <FaTimes onClick={() => setModal(false)} className='absolute top-10 hover:rotate-180 transition duration-300 right-10 text-white text-3xl flex md:hidden' />
            <div className=' w-screen h-screen md:hidden p-0 m-0 z-50 flex flex-col items-center justify-center overscroll-y-none'>  
              <ul className='space-y-16 text-white text-2xl'>
                <li className='hover:text-black transition duration-300'><a href="#about">About me</a></li>
                <li className='hover:text-black transition duration-300'>My Skills</li>
                <li className='hover:text-black transition duration-300'>Projects</li>
                <li className='hover:text-black transition duration-300'>Contact</li>
              </ul>
            </div>
          </div>
        }
        <ul className='md:flex dark:text-white lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <a href="#about"><li className='hover:text-white transition duration-300'>About Me</li></a>
            <a href="#stack"><li className='hover:text-white transition duration-300'>My Skills</li></a>
            <a href="#projects"><li className='hover:text-white transition duration-300'>Projects</li></a>
            <a href="#contact"><li className='hover:text-white transition duration-300'>Contact</li></a>
            {
              darkMode ? <li onClick={() => setDarkMode(false)}><BsSun onClick={handleCLick} className='text-3xl hover:scale-110 transition' /></li> : <li><MdOutlineModeNight onClick={() => changeMode()} className='text-3xl hover:scale-110 transition' /></li>
            }
        </ul>
      </div>
    </section>
    
  )
}

export default Nav