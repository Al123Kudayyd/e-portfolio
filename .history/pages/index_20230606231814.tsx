import Info from "@/components/Info";
import Nav from "@/components/Nav";



export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center space-x">
        <Info />
        <div className="border-black h-8 w-8 "></div>
      </div>
      
      
    </>
  )
}
