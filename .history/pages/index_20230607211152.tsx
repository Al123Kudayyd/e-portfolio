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
      <div id="about" className="my-56 bg-[#f1f0f0]">
        <AboutMe />
      </div>
      
      
      
    </>
  )
}
