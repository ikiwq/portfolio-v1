import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import {FaBars, FaEnvelope, FaGithub, FaHome, FaTimes, FaTools, FaTwitch, FaTwitter, FaUser, FaYoutube} from 'react-icons/fa'

const NavBar = () => {
    const links = [
        {
            id:1,
            link:<h1>Home</h1>
        },
        {
            id:2,
            link:<h1>About</h1>
        },
        {
            id:3,
            link:<h1>Tools</h1>
        },
        {
            id:4,
            link:<h1>Contact</h1>
        }
    ]

    const contacts = [
        {
            id:1,
            icon:<FaTwitter color = "#00acee" className='cursor-pointer hover:rotate-45 hover:scale-125 duration-300'/>,
            href:"https://twitter.com"
        },
        {
            id:2,
            icon:<FaTwitch color="#6441a5" className='cursor-pointer hover:rotate-45 hover:scale-125 duration-300'/>,
            href:"https://www.twitch.tv/ikiwq_"
        },
        {
            id:3,
            icon:<FaGithub className='cursor-pointer hover:rotate-45 hover:scale-125 duration-300'/>,
            href:"https://github.com/ikiwq"
        },
        {
            id:4,
            icon:<FaYoutube color="#FF0000" className='cursor-pointer hover:rotate-45 hover:scale-125 duration-300'/>,
            href:"https://www.youtube.com/channel/UCwdhc-Phu8SVeQkwyjQUfsA/videos"
        }
    ]

    const [nav, setNav] = useState(false);

  return (
    <div className=' w-full z-10 max-h-20 flex text-white fixed bg-black px-4 md:flex md:flex-col md:w-20 md:max-h-full md:h-full items-center'>
        <div className='py-4 mx-auto'>
            <img src={Logo} className='hidden rounded-full md:scale-125 md:table hover:-rotate-45 duration-500'/>
            <h1 className='my-auto text-1xl font-handwrite text-center py-3 text-2xl cursor-default hover:scale-150 duration-300'>Iki</h1>
        </div>

        <div className='hidden absolute top-[35%] md:flex md:flex-col'>
            {links.map(({id, link}) => (
                <div key={id} className="py-4 text-center hover:scale-110 hover:duration-300 hover:cursor-pointer">
                    {link}
                </div>
            ))}
        </div>

        <div className='hidden mx-auto md:table md:bottom-0 md:absolute'>
            {contacts.map(({id, icon, href}) => (
                <div key={id} className="py-2 text-2xl">
                    <a href={href} target="_blank">
                        {icon}
                    </a>
                </div>
            ))}
        </div>

        <div>

        </div>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer my-auto md:hidden z-10'>
            {nav ? <FaTimes size={30} className="py-1"/> : <FaBars size={30} className="py-1"/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900'>
            {links.map(({id, link}) => (
                <div key={id} className="py-2 text-4xl">
                    {link}
                </div>
            ))}
            <div className='my-10'>
            {contacts.map(({id, link}) => (
                <div key={id} className="py-2 text-4xl">
                    {link}
                </div>
            
            ))}
            </div>
        </ul>
        )}
    </div>
  )
}

export default NavBar