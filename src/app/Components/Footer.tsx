"use client"
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#000]'>
    <div className='mt-12 text-white/70 py-8 container mx-auto border-t border-gray-700 pt-4 px-8 flex justify-between items-center'>

        <h1 className='text-2xl font-bold'>Meet Khatu</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="https://linkedin.com/in/meetkhatu" target='_blank' className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/meetkhatu" target='_blank' className='hover:text-gray-300'>
                <FaGithub size={24} />
            </a>
        </div>
      
    </div>
    </div>
  )
}

export default Footer
