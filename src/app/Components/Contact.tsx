"use client"
import Image from 'next/image'
import React from 'react'
import phone from '../Assets/starter-files-nextjs-animated/assets/phone.png'
import mail from '../Assets/starter-files-nextjs-animated/assets/mail.png'

const Contact = () => {
  return (
    <div className='bg-[#000]'>
    <div id='contact' className='max-w-[1000px] mx-auto flex flex-col items-center lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8'>
      
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
            <li className='flex items-center'>
                <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6' />
                <p className='text-xl'>+91 9967171587</p>
            </li>
            <li className='flex items-center'>
                <Image src={mail} alt='mail' className='h-[110px] w-auto mr-6' />
                <p className='text-xl'>meettk123@gmail.com</p>
            </li>
        </ul>
      </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let&apos;s Connect</h2>
            <p className='text-white/70 mb-6'>Send me a message and lets schedule a call!</p>
            <form className='space-y-4' method='POST' action='https://getform.io/f/ajjjmexa'>
                <div className='grid md:grid-cols-2 gap-4'>
                <input type='text' name='fname' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name' required/>
                <input type='text' name='lname' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name' required/>
                <input type='email' name='email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email' required/>
                <input type='phone' name='phone'  className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone' required/>
                </div>
                <textarea name='message' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full' rows={4} style={{resize:'none'}} placeholder='Your Message' required/>
                <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
            </form>


        </div>
    </div>
    </div>
  )
}

export default Contact
