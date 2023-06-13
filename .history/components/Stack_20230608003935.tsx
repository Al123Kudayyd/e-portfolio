import { SiHtml5 } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div>
          <div className='flex items-center just'>
              <h3 className='font-bold mb-10'><span className='text-purple-500'>Teachnologies</span> I've used</h3>
              <div className="onHover flex-col items-center">
                  <SiHtml5 className='text-5xl' />
                  <p className='text-xl'>HTML</p>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Stack