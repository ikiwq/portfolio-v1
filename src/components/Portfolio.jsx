import React from 'react'
import PathFinding from '../assets/images/Pathfinding.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 0,
            src: PathFinding
        }
    ]

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mx-auto md:mx-0'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Check out my work!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id, src}) =>(
                <div key={id}>
                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Check the code!</button>
                </div>
                </div>
        ))}
        </div>
        
    </div>
    </div>
  )
}

export default Portfolio