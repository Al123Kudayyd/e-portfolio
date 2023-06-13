import Nav from "@/components/Nav";


export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex-col items-center justify-center text-center">
        <h1 className="text-7xl my-48 font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
        <h3 className="text-2xl -my-34 font-semibold">I'm an aspiring <span className="text-purple-500">Frontend Software Engineer</span> <br /> passionate about building web applications <br /> with great user experiences.</h3>
      </div>
    </>
  )
}
