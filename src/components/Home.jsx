import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import  Logo from '../assets/images/logo.png'
import { Typewriter} from 'react-simple-typewriter'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-900 text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full md:px-5 md:flex-row lg:px-0'>
            <div className='mx-3 items-center md:min-w-400'>
                <h2 className='text-4xl lg:text-5xl inline-block'>Hello, I'm Chris aka iki.<br/></h2>
                <h2 className='text-4xl lg:text-5xl'>I am a <Typewriter loop cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} words={['Student', 'Developer']}/></h2>
                <button className='mx-auto hover:scale-110 duration-300 flex my-4 p-2 bg-black rounded-3xl items-center bg-gradient-to-r from-cyan-600  to-blue-800 md:mx-0'>
                        Show me more!
                        <span className='ml-2 animate-bounce duration-300'>
                            <IoIosArrowDropdown />
                        </span>
                </button>
            </div>

            <div className=' scale-50 md:scale-100'>
                <img src={Logo} alt='my profile' className='rounded-full w-full'/>
            </div>
            
        </div>
    </div>
  )
}

export default Home