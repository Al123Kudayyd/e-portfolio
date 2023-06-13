import { BsLinkedin } from 'react-icons/bs'
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
          <div className="border-purple-500 flex items-center justify-center border-solid border-4 h-14 w-8 rounded-2xl">
            <div className="border-purple-500 border-solid border-2 rounded h-5 w-0"></div>
          </div>
      </div>
        
      </div>
  )
}

export default Info