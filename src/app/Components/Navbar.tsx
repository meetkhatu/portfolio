"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" }
];

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            y: 0,
            transition: {
                stiffnes: 20,
                damping: 15
            }
        },
        closed: {
            y: '-500%',
            transition: {
                stiffnes: 20,
                damping: 15
            }
        }
    }

    return (
        <div className='text-white/70 pt-6 bg-[#000]'>
            <div className='hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]'>
                <ul className='flex flex-row p-4 space-x-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path}><p>{link.title}</p></Link>
                            </li>
                        ))
                    }
                    <li>
                        <a href="#contact" className='group'>
                            <h1 className='text-lg font-bold text-white/70 cursor'>Contact Me</h1>
                            <div className='relative'>
                                <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out
                                bg-orange-400 rounded-full'></div>
                                <div className='mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out
                                bg-orange-600 rounded-full'></div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded border-white/70 text-white/70 p-2 z-50'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div initial={false} animate={nav ? 'open' : 'closed'} variants={menuVariants} className='fixed left-0 top-0 w-full z-40 bg-black/90'>
                <ul className='flex flex-col text-4xl font-semibold my-24 text-center space-y-8'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>{link.title}</Link>
                        </li>
                    ))}
                    <li className='text-center'>
                        <div className='inline-block'>
                        <a href="#contact" onClick={closeNav} className='group'>
                            <h1 className=' text-5xl mx-auto font-semibold text-white/70 cursor'>Contact Me</h1>
                                <div className='relative'>
                                <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out
                                bg-orange-400 rounded-full'></div>
                                <div className='mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out
                                bg-orange-600 rounded-full'></div>   
                                </div>
                        </a>
                        </div>
                    </li>
                </ul>

            </motion.div>
        </div>
    )
}

export default Navbar
