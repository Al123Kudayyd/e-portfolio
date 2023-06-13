import { MdOutlineModeNight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'

function Nav() {
  return (
    <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='py-5 mx-10 flex items-center justify-end font-bold cursor-pointer'>
        <FaBars className='flex md:hidden lg:hidden text-2xl hover:text-white transition du' />
        <ul className='md:flex lg:flex hidden space-x-5 items-center justify-end text-xs sm:text-xl'>
            <li className='hover:text-white transition du'>About Me</li>
            <li className='hover:text-white transition du'>My Skills</li>
            <li className='hover:text-white transition du'>Projects</li>
            <li className='hover:text-white transition du'>Contact</li>
            <li><MdOutlineModeNight className='text-3xl hover:scale-110 transition' /></li>
            
        </ul>
      </div>
    </section>
    
  )
}

export default Nav