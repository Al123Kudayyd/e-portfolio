import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-black border-solid border-2 h-16 w-8 colo rounded-2xl"></div>
      </div>
      
      
    </>
  )
}
