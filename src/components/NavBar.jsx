import React, { useState } from 'react'
import {FaBars, FaGithub, FaTimes, FaTwitch, FaTwitter, FaYoutube, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"skills"
        },
        {
            id:5,
            link:"contact"
        }
    ]

    const contacts = [
        { 
            id:0,
            icon:<FaGithub color="#FFFFFF" className='cursor-pointer hover:rotate-12 hover:scale-125 duration-300'/>,
            href:"https://github.com/ikiwq"
          
        },
        {
            id:1,
            icon:<FaTwitch color="#6441a5" className='cursor-pointer hover:rotate-12 hover:scale-125 duration-300'/>,
            href:"https://www.twitch.tv/ikiwq_"
        },
        {
            id:2,
            icon:<FaYoutube color="#FF0000" className='cursor-pointer hover:rotate-12 hover:scale-125 duration-300'/>,
            href:"https://www.youtube.com/channel/UCwdhc-Phu8SVeQkwyjQUfsA/"
        },
        {
            id:3,
            icon: <FaInstagram color="" className='cursor-pointer hover:rotate-12 hover:scale-125 duration-300 text-pink-700'/>,
            href:""
        }
    ]

    const [nav, setNav] = useState(false);

  return (
    <div className=' w-full z-10 max-h-20 flex text-white fixed bg-black px-4 md:flex md:flex-col md:w-20 md:max-h-full md:h-full items-center justify-between'>
        <div className='py-4 mx-auto'>
            <h1 className='my-auto text-1xl font-handwrite text-center py-3 text-2xl cursor-default hover:scale-150 duration-300'>Iki</h1>
        </div>

        <div className='hidden md:flex md:flex-col'>
            {links.map(({id, link}) => (
                <Link to={link} smooth duration={500}>
                    <div key={id} className="py-4 text-center hover:scale-110 hover:duration-300 hover:cursor-pointer">
                        {link}
                    </div>
                </Link>
            ))}
        </div>

        <div className='hidden mx-auto md:table'>
            {contacts.map(({id, icon, href}) => (
                <div key={id} className="py-2 text-2xl">
                    <a href={href} target="_blank">
                        {icon}
                    </a>
                </div>
            ))}
        </div>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer my-auto md:hidden z-10'>
            {nav ? <FaTimes size={30} className="py-1"/> : <FaBars size={30} className="py-1"/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900'>
            {links.map(({id, link}) => (
                 <Link to={link} smooth onClick={() => setNav(!nav)}>
                    <div key={id} className="py-2 text-4xl">
                        {link}
                    </div>
                </Link>
            ))}
        </ul>
        )}
    </div>
  )
}

export default NavBar