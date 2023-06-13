import AboutMe from "@/components/AboutMe";
import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="mt-48 md:mt-56">
        <Info />
      </div>
      <div id="about" className="mt-56 bg-[#e5e4e4]">
        <AboutMe />
      </div>
      
      
      
    </>
  )
}
