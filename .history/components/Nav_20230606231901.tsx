import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <div className='my-5 mx-15 flex items-center justify-end font-bold cursor-pointer'>
        <FaBars className='flex md:hidden lg:hidden text-2xl hover:text-purple-500 transition' />
        <ul className='md:flex lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <li className='hover:text-purple-500 transition'>About Me</li>
            <li className='hover:text-purple-500 transition'>My Skills</li>
            <li className='hover:text-purple-500 transition'>Projects</li>
            <li className='hover:text-purple-500 transition'>Contact</li>
            <li><MdOutlineModeNight className='text-3xl hover:scale-110 transition' /></li>
            
        </ul>
        
    </div>
  )
}

export default Nav