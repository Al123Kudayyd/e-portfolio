import { SiHtml5, SiCss3, SiReact, SiNextdotjs } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div>
          <div className='flex flex-col items-center justify-center mt-20'>
          <h3 className='font-bold mb-10 text-3xl'><span className='text-purple-500'>Teachnologies</span> I've used</h3>
            <div className='flex items-center justify-center space-x-5'>
                <div className="onHover flex flex-col items-center">
                    <SiHtml5 className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>HTML</p>
                </div>
                <div className="flex flex-col items-center text-[#2965F1]">
                    <SiCss3 className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>CSS</p>
                </div>
                <div className="flex flex-col items-center text-[#7CC5D9]">
                    <SiReact className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>React.js</p>
                </div>
                <div className="flex flex-col items-center text-[black]">
                    <SiNextdotjs className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Next.js</p>
                </div>
                <div className="flex flex-col items-center text-[black]">
                    <SiNextdotjs className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>Firebase</p>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Stack