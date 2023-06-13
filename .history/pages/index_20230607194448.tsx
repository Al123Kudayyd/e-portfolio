import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  

  return (
    <>
      <Nav />
      <div className="mt-48 md:mt-56 flex-col items-center ">
        <Info />
        
      </div>
      
      
    </>
  )
}
