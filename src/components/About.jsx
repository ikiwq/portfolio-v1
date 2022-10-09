import {AiOutlineDownload} from 'react-icons/ai'

const About = () => {
  return (
    <div name="about" className='h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='absolute w-full'>
        </div>
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='m-3'>
            <div className='pb-8 mx-auto md:mx-0'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>
                    About
                </p>
            </div>
            <div className='text-xl'>
            <p>
                Hello, I am Chris, aka "ikiwq" or "iki". I am a 18 years old fullstack developer currently living in Italy.
                I am very curious about the IT world and I'm keen to learn new things everyday.
            </p>
            <br/>
            </div>
                <button className='mx-auto hover:scale-110 duration-300 flex my-4 p-2 bg-black rounded-3xl items-center bg-gradient-to-r from-pink-600 to-purple-600 md:mx-0'>
                        Download my Curriculum!
                    <span className='ml-2'>
                        <AiOutlineDownload/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default About