import React from 'react'
import PathFinding from '../assets/images/Pathfinding.png'
import KromiSDL from '../assets/images/KromiSDL.png'
import IkiwqBlog from '../assets/images/Blog.png'

const Portfolio = () => {
    const portfolios = [
        {   
            name: "Ikiwq Blog",
            id: 0,
            src: IkiwqBlog,
            site: "Check out the site!",
            link: "https://ikiwq.tk"
        },
        {   
            name: "PathFinding Visualizer",
            id: 1,
            src: PathFinding,
            site: "GitHub",
            link: "https://github.com/ikiwq/PathfindingVisualizer"
        },
        {   
            name: "KromiSDL",
            id: 2,
            src: KromiSDL,
            site: "GitHub",
            link: "https://github.com/ikiwq/KromiSDL"
        }
    ]

  return (
    <div name="portfolio" className='w-full h-full bg-gradient-to-b from-black to-gray-900 text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='m-3'>
        <div className='pb-8 mx-auto md:mx-0'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Check out my work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20'>
        {
            portfolios.map(({name, id, src, site, link}) =>(
                <div key={id} className=" rounded-xl relative group shadow-2xl">
                    <div className='w-full h-full absolute inset-0 z-0 blur opacity-75 bg-gradient-to-r from-pink-600 to-purple-600 duration-500 group-hover:duration-200 group-hover:opacity-100 group-hover:blur-md'>
                    </div>
                    <div className=' bg-gray-900 rounded-xl relative z-100 '>
                        <h1 className=' text-center mb-2 text-xl '>{name}</h1>
                        <img src={src} alt='' className='rounded-md object-contain h-100 w-100'/>
                        <div className='flex items-center justify-center'>
                            <a target="_blank" href={link} className='w-full'><button className='w-full py-3 my-2 duration-500 text-gray-400 hover:scale-105 hover:text-white hover:duration-200'>{site}</button></a>
                        </div>
                    </div>
                </div>
        ))}
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Portfolio