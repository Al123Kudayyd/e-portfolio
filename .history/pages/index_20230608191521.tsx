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
      <div className="mt-48 md:mt-56">
        <Info />
      </div>
      <div id="about" className="mt-56 bg-[#f1f0f0]">
        <AboutMe />
      </div>
      <div className="my-20">
        <Stack />
      </div>
      <div className="bg-[#f1f0f0]">
        <Project />
      </div>
      <div className="my-20">
        <Contact />
      </div>
      <h2 className="m">
      © 2022 Sammy Al Khudayyd
      </h2>
      
      
    </>
  )
}
