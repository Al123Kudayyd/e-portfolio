import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import { useEffect, useState } from "react";



export default function Home() {
  
  const [scroll, setScroll] = useState<boolean | any>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <>
      <Nav />
      <div className=" dark:bg-black dark:text-white dark:p-0">
        <Info />
      </div>
      {scroll && 
        <div className="shadow-2xl shadow-black top-1/2">
          <li>contact me via this nummber!</li>
        </div>
      }
      <div id="about" className="bg-[#f1f0f0]">
        <AboutMe />
      </div>
      <div id="stack" className="">
        <Stack />
      </div>
      <div id="projects" className="bg-[#f1f0f0]">
        <Project />
      </div>
      <div id="contact" className="">
        <Contact />
      </div>
      <h2 className="text-center dark:bg-black dark:text-white pb-16 text-xl font-bold">© 2023 Sammy Al Khudayyd</h2>
      
      
      
    </>
  )
}
