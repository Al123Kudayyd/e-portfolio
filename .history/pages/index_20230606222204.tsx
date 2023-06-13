import Nav from "@/components/Nav";
import { BsLinkedin } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'


export default function Home() {
  return (
    <div>
      <Nav />
      <div className="overflow-hidden">
        <div className="space-y-10 my-11 flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
          <h3 className="text-2xl font-semibold">I'm an aspiring <span className="text-purple-500">Frontend Software Engineer</span> <br /> passionate about building web applications <br /> with great user experiences.</h3>
          <div className="flex items-center space-x-3 text-3xl text-purple-500">
            <BsLinkedin />
            <AiTwotoneMail />
          </div>
        </div>
      </div>
      
    <div/>
  )
}
