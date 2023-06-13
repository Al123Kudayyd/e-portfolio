import { SiHtml5, SiCss3, SiReact, SiNextdotjs, SiFirebase, SiRedux, SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si' 

function Stack() {
  return (
    <div>
        <h1 className='text-center text-5xl font-bold'>My <span className='text-purple-500'>Skill Stack.</span></h1>
        <div>
            <div>
                <h3><span className='text-purple-500'>Technologies</span>I've used</h3>
                <div>
                    <SiHtml5 />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Stack