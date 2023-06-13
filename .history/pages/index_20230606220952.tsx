import Nav from "@/components/Nav";
import { BsLinkedin } from 'react-icons/bs'


export default function Home() {
  return (
    <>
      <Nav />
      <div className="overflow-hidden flex items cen">
        <div className="flex-col justify-center items-center space-y-10 my-11">
          <h1 className="text-7xl font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
          <h3 className="text-2xl font-semibold">I'm an aspiring <span className="text-purple-500">Frontend Software Engineer</span> <br /> passionate about building web applications <br /> with great user experiences.</h3>
          <BsLinkedin />
        </div>
      </div>
      
    </>
  )
}
