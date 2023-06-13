import AboutMe from "@/components/AboutMe";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import Project from "@/components/Project";
import Stack from "@/components/Stack";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="mt-48 md:mt-56">
        <Info />
      </div>
      <div id="about" className="mt-56 bg-[#f1f0f0]">
        <AboutMe />
      </div>
      <div className="mt-20">
        <Stack />
      </div>
      <div className="bg-[#f1f0f0]">
        <Project />
      </div>
      
      
    </>
  )
}
