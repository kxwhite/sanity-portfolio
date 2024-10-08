import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion"
import Link from 'next/link'
import { SocialType } from '@/types'

type Props = {
  socials: SocialType[];
}
export default function Header({socials} : Props) {
  return (
    <header className='sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center'
      >
        {socials.map(social => (
          <SocialIcon
            key={social._id}
            url={social.url}
            target='_blank'
            fgColor='gray'
            bgColor='transparent'
          />
        ))}
      </motion.div>


      <Link href='#contactme'>
        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center cursor-pointer'>
          <MdOutlineEmail className="cursor-pointer mr-2" color='gray' fontSize='28px'/>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </motion.div>
      </Link>
    </header>
  )
}
