import Info from "@/components/Info";
import Nav from "@/components/Nav";
import { useState } from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState()

  return (
    <>
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-black h-16 w-16"></div>
      </div>
      
      
    </>
  )
}
