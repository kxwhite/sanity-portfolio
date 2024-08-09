import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from '@/components/ExperienceCard'
import { ExperienceType } from '@/types';

type Props = {
  experiences: ExperienceType[];
}

export default function Experience({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ height: '150vh' }}
      className='relative flex flex-col text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {experiences?.map(experience => (
          <ExperienceCard key={experience?._id} experience={experience}/>
        ))}
      </div>
    </motion.div>
  )
}
