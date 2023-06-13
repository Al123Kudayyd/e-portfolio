import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiFirebase, SiRedux, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div className='flex flex-col md:flex items-center justify-center'>
          <div className='flex flex-col items-center justify-center mt-20'>
          <h3 className='font-bold mb-10 text-3xl'><span className='text-purple-500'>Teachnologies</span> I've used</h3>
            <div className='flex flex-wrap items-center justify-center space-x-5 space-y-6'>
                <div className="shadow-2xl px-6 py-3 shadow-[black] relative flex flex-col items-center text-[#F06529]">
 top-0 text-4xl hover:scale-[.85] transition duration-300' />
 top-10 text-sm font-semibold'>HTML</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[#2965F1]">
                    <SiCss3 className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>CSS</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[#7CC5D9]">
                    <SiReact className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>React.js</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[black]">
                    <SiNextdotjs className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Next.js</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[#F6820D]">
                    <SiFirebase className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Firebase</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[#7348B7]">
                    <SiRedux className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Firebase</p>
                </div>
                <div className="relative shadow-2xl shadow-[black] px-6 py-3 flex flex-col items-center text-[#7348B7]">
                    <SiTailwindcss className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Tailwind</p>
                </div>
              </div>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='font-bold mx-8 my-8 text-3xl'><span className='text-purple-500'>Languages</span> I've worked with</h3>
            <div className='flex flex-wrap items-center justify-center space-x-5'>
                <div className="onHover flex flex-col items-center text-[#F5DE19]">
                    <SiJavascript className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Javascript</p>
                </div>
                <div className="onHover flex flex-col items-center text-[#2D79C7]">
                    <SiTypescript className='text-4xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Typescript</p>
                </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Stack