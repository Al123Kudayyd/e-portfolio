import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-black border-solid border-2 h-12 w-7 rounded-xl"></div>
      </div>
      
      
    </>
  )
}
