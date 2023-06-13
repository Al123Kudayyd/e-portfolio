import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="mt-48 md:mt-56 dark:bg-black dark:mt-0">
        <Info />
      </div>
      <div id="about" className="mt-56 bg-[#f1f0f0]">
        <AboutMe />
      </div>
      <div id="stack" className="my-20">
        <Stack />
      </div>
      <div id="projects" className="bg-[#f1f0f0]">
        <Project />
      </div>
      <div id="contact" className="my-16">
        <Contact />
      </div>
      <h2 className="text-center mb-16 text-xl font-bold">© 2023 Sammy Al Khudayyd</h2>
      
      
      
    </>
  )
}
