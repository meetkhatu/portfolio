"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'
import project from '../Assets/starter-files-nextjs-animated/assets/project.jpg'


const projects = [
    {
        title: "MyChat",
        desc: "Full Stack Project to implement an easy-to-use user friendly to-do list.",
        devstack: "MongoDB, Express, React, Node.js",
        git: "https://github.com/meetkhatu/Messenger",
        src: project
    },
    {
        title: "To-Do List",
        desc: "Full Stack Project to implement a real-time chat application and detect and broadcast online presence of users.",
        devstack: "MongoDB, Express, React, Node.js",
        git: "https://github.com/meetkhatu/todolist",
        src: project
    },
    {
        title: "E-Commerce Website",
        desc: "Frontend React Project to develop an E-Commerce Website and understand how to implement various functionalities such as an Order Cart and JWT Authentication for User Login.",
        devstack: "MongoDB, Express, React, Node.js",
        git: "https://github.com/neelprajapati12/E-Commerce-Website",
        src: project
    },
    {
        title: "CRUD Flask Application",
        desc: "Simple CRUD application to understand the implementation of Flask in Backend.",
        devstack: "Flask, PostgreSQL",
        git: "https://github.com/meetkhatu/CRUD-Flask",
        src: project
    },
    {
        title: "BookStop",
        desc: "Frontend React Project to develop a frontend application using React.js. The project includes understanding and testing APIs, implementing UI pages and dynamically loading data from APIs.",
        devstack: "ReactJS",
        git: "https://github.com/meetkhatu/Bookstop",
        src: project
    }
]
const Portfolio = () => {
    return (
        <div id='portfolio' className='text-white bg-gradient-to-b from-[#2B1942] via-[black] to-[#381a5f] py-[120px] mt-[70px]'>
            <div className='w-full col-span-8 relative'>
                <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 my-12'>
                    My <span className='text-orange-400'>Projects</span>
                </h1></div>


            <div className='px-6 md:px-0 max-w-[1000px] mx-auto space-y-24 mt-[100px]'>
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.25 }}
                            className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row gap-12"}`}>

                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                                <p className='text-xl text-orange-400 font-semibold'>{project.devstack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.git} target='_blank' className='hover:underline hover:text-purple-300'>Git</a>
                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />
                            </div>

                        </motion.div>
                    ))
                }

            </div>

        </div>
    )
}

export default Portfolio
