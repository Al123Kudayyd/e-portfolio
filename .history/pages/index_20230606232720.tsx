import Info from "@/components/Info";
import Nav from "@/components/Nav";



export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center mt">
        <Info />
        <div className="border-black h-16 w-16"></div>
      </div>
      
      
    </>
  )
}
