import Nav from "@/components/Nav";


export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
        <h3 className="text-2xl w-8 ">I'm an aspiring <span className="text-purple-500">Frontend Software Engineer</span> passionate about building web applications with great user experiences.</h3>
      </div>
    </>
  )
}
