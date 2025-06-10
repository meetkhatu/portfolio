"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import cursor from "../Assets/starter-files-nextjs-animated/assets/icon1.png"
import lightning from "../Assets/starter-files-nextjs-animated/assets/icon2.png"
import profilepic from '../Assets/starter-files-nextjs-animated/assets/5B9010F7-3C24-4504-87CE-36AA570A328B-removebg-preview.png'

const Hero = () => {
  return (
    <div className='py-24 overflow-x-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]'>

      <div className='w-full relative'>
        <div className='absolute rounded-[50%] w-[3000px] h-[1640px] md:h-[1000px] top-[550px] left-[50%] -translate-x-1/2
                      bg-[radial-gradient(closest-side,#000_80%,#2B1942)]'></div>
      </div>

      <div className='relative'>
        <div className='text-8xl font-bold text-center'>
          <h1 className='text-[#98B4CE]'>Hi, I am</h1>
          <h1 className='text-[#E48A57]'>Meet Khatu</h1>
        </div>


        <motion.div
          className='absolute right-[280px] top-[170px]'
          drag
          dragConstraints={{ left: -200, top: -200, right: 200, bottom: 200 }}
          whileDrag={{ scale: 1.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'grab'
          }}>
          <Image
            src={cursor}
            height="190"
            width="190"
            alt='cursor'
            className='hidden md:block'
            draggable="false" />
        </motion.div>

        <motion.div
          className="absolute left-[280px] top-[170px]"
          drag
          dragConstraints={{ left: -200, top: -200, right: 200, bottom: 200 }}
          whileDrag={{ scale: 1.1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'grab'
          }}>
          <Image
            src={lightning}
            height="120"
            width="120"
            alt='message'
            className='hidden md:block'
            draggable='false' />
        </motion.div>


        <p className='text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80'>
          I am a full-stack web developer focused on creating websites that provide the best experience for users.
        </p>

        <Image
          src={profilepic}
          alt='profile picture'
          className=' h-[200px] w-[150px] mx-auto' />
      </div>
    </div>
  )
}

export default Hero
