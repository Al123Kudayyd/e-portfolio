import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-black border-solid border-2 h-10 w-8 rounded-xl"></div>
      </div>
      
      
    </>
  )
}
