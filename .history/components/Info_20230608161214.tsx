import { BsLinkedin, BsArrowDownCircle } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'

function Info() {
  return (
    <div className="overflow-hidden">
        <div className="space-y-10 flex-col text-center justify-center items-center">
          <h1 className="text-7xl font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
          <h3 className="text-2xl font-semibold">I'm an aspiring <span className="text-purple-500">Frontend Software Engineer</span> <br /> passionate about building web applications <br /> with great user experiences.</h3>
          <div className="flex justify-center items-center space-x-3 text-3xl text-purple-500 cursor-pointer">
            <BsLinkedin />
            <AiTwotoneMail />
          </div>
          <div className='flex cursor-pointer transition duration-300 justify-center text-purple-500 animate-bounce text-5xl'>
            <a href="=-/about"><BsArrowDownCircle className='my-10 hidden sm:flex shadow-lg shadow-[black] rounded-3xl' /></a>
          </div>
      </div>
        
      </div>
  )
}

export default Info