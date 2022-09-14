import React from 'react'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full '>

            <div className='pb-8 mx-auto md:mx-0'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <div className='text-xl'>
            <p>
                Hello, I am Chris, aka iki. I am a 18 years old student. I am a computer science enthusiast.
                I am currently studying CS by my self.
            </p>
            <br/>
            <p>
                I am interested both in front-end and back-end technologies.
            </p>
            </div>
        </div>
    </div>
  )
}

export default About