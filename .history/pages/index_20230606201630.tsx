import Nav from "@/components/Nav";


export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex-col items-center justify-center text">
        <h1 className="text-6xl font-bold">Hey I'm <span className="text-purple-500">Sammy.</span></h1>
      </div>
    </>
  )
}
