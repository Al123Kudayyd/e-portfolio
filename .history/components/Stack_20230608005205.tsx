import { SiHtml5 } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div>
          <div className='flex flex-col items-center justify-center mt-20'>
            <div>
              
                <div className="onHover flex flex-col items-center">
                    <SiHtml5 className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>HTML</p>
                </div>
                <div className="onHover flex flex-col items-center">
                    <SiHtml5 className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>HTML</p>
                </div>
                <div className="onHover flex flex-col items-center">
                    <SiHtml5 className='text-5xl hover:scale-[.85] transition duration-300' />
                    <p className='text-sm font-semibold'>HTML</p>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Stack