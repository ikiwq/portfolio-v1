import React from 'react'
import TwitterIcon from '../assets/twitter.png'
import GitHubIcon from '../assets/github.png'
import LinkedinIcon from '../assets/Linkedin.png'

const Contact = () => {
  const socials = [
    {   
        id: 0,
        name: "Twitter",
        src: TwitterIcon,
        link: "https://twitter.com/iki_wq"
    },
    {   
      id: 1,
      name: "Linkedin",
      src: LinkedinIcon,
      link: "https://www.linkedin.com/in/christopher-domenicano-169468251"
    }

]

  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col md:w-[calc(100%-80px)] md:float-right'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='m-3'>
            <div className='pb-8 mx-auto md:mx-0'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Contact me!</p>
            </div>
            
            <div className='grid grid-cols-2 md:grid-cols-2'>
            {
            socials.map(({id, name, src, link}) =>(
                <div key={id} className="relative group mx-10">
                  <a href={link} target="_blank">
                    <div className='relative z-100 flex flex-col justify-center items-center group'>
                      <div className='rounded-full relative'>
                        <div className='relative rounded-full'>
                          <img src={src} alt='' className='rounded-md object-contain w-10 group-hover:scale-105 duration-500 group-hover:duration-200'/>
                        </div>
                        </div>
                        <div className='flex items-center justify-center'>
                          <button className='w-full py-3 my-2 duration-500 text-gray-400 group-hover:scale-105 group-hover:text-white group-hover:duration-200'>{name}</button>
                        </div>
                    </div>
                    </a>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contact