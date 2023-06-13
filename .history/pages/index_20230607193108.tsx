import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-purple-500 border-solid border-4 flex h-14 w-8 rounded-2xl"></div>
      </div>
      
      
    </>
  )
}
