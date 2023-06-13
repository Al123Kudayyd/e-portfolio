import { SiHtml5 } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div>
          <div className='flex'>
              <h3 className='font-bold'><span className='text-purple-500'>Teachnologies</span> I've used</h3>
              <div className="shadow-2xl">
                  <SiHtml5 />
                  <p>HTML</p>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Stack