import React from 'react'
import HtmlIcon from '../assets/html.png'
import CssIcon from '../assets/css.png'
import JavaScriptIcon from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import ExpressIcon from '../assets/express.png'
import MongoIcon from '../assets/mongodb.png'
import NodeIcon from '../assets/nodejs.png'
import TailwindIcon from '../assets/tailwind.png'
import PythonIcon from '../assets/python.png'
import CppIcon from '../assets/cpp.png'
import JavaIcon from '../assets/Java.png'

const Skills = () => {
    const tools = [
        {   
            id: 0,
            name: "Html",
            src: HtmlIcon
        },
        {   
            id: 1,
            name: "Css",
            src: CssIcon
        },
        {
            id: 2,
            name: "JavaScript",
            src: JavaScriptIcon
        },
        {
            id: 3,
            name: "MongoDB",
            src: MongoIcon
        },
        {
            id: 4,
            name: "Express",
            src: ExpressIcon
        },
        {
            id: 5,
            name: "React",
            src: ReactIcon
        },
        {
            id: 6,
            name: "NodeJS",
            src: NodeIcon
        },
        {
            id: 7,
            name: "Tailwind",
            src: TailwindIcon
        },
        {
            id: 8,
            name: "Python",
            src: PythonIcon
        },
        {   
            id: 9,
            name: "C++",
            src: CppIcon
        },
        {
            id: 10,
            name:"Java",
            src: JavaIcon
        }
    ]

  return (
    <div name="skills" className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='m-3'>
            <div className='pb-8 mx-auto md:mx-0'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Skills</p>
                <p className=' mt-2 '>These are all the technologies/tools I've used</p>
            </div>

        <div className='grid grid-cols-2 md:grid-cols-3'>
        {
            tools.map(({id,name, src}) =>(
                <div key={id} className='group flex flex-col justify-start items-center m-4'>
                    <img src={src} className="h-24 w-24 group-hover:rotate-icon-anim duration-300"/>
                    <p className='text-center '>{name}</p>
                </div>
        ))}
        </div>

        </div>
        </div>
    </div>
  )
}

export default Skills