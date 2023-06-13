import Info from "@/components/Info";
import Nav from "@/components/Nav";



export default function Home() {
  return (
    <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Nav />
      <div className="md:mt-48">
        <Info />
        <div className="border-black h-16 w-16"></div>
      </div>
      
      
    </div>
  )
}
