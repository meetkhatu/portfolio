"use client"
import React from 'react'
import { BiLogoFlask, BiLogoPostgresql } from 'react-icons/bi'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNode, FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'


const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML"},
    { icon: <FaCss3Alt size={140} />, label: "CSS"},
    { icon: <FaReact size={140} />, label: "React"},
    { icon: <FaJsSquare size={140} />, label: "JavaScript"},
    { icon: <FaNode size={140} />, label: "Node"},
    { icon: <SiMongodb size={140} />, label: "MongoDB"},
    { icon: <BiLogoFlask size={140} />, label: "Flask"},
    { icon: <BiLogoPostgresql size={140} />, label: "PostgreSQL"},
]
const Skills = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-20'>
      <div className='text-white md:max-w-[950px] mx-auto p-8 text-center'>
            <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                {skillIcons.map((skill,index) => (
                    <div key={index} className='md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                        {skill.icon}
                        <p className='mt-2'>{skill.label}</p>
                    </div>
                ))}
            </div>
      </div>
    </div>
  )
}

export default Skills
