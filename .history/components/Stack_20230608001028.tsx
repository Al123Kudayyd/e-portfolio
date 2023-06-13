import { SiHtml5 } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div className='flex-col justify-center'>
            <h3><span>Teachnologies</span> I've used</h3>
            <div>
                <SiHtml5 />
                <p>HTML</p>
            </div>
        </div>
    </div>
  )
}

export default Stack