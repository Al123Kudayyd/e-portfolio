import Info from "@/components/Info";
import Nav from "@/components/Nav";



export default function Home() {
  return (
    <>
      <Nav />
      <div className="md:whitespace-pre-line">
        <Info />
        <div className="border-black h-16 w-16"></div>
      </div>
      
      
    </>
  )
}
