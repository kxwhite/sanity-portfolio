import React from 'react'
import { motion } from "framer-motion"
import ReactIcon from "/assets/ReactIcon.png";

import { urlFor } from '@/sanity.config';
import { SkillType } from '@/types';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({directionLeft, skill}: Props) {
  return (
    <div className='relative flex group cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        >
        <Image
          className='rounded-full border border-gray-500 object-contain w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
          loader={() => urlFor(skill?.image).url()}
          src={urlFor(skill?.image).url()}
          width={getImageDimensions(urlFor(skill?.image).url()).width}
          height={getImageDimensions(urlFor(skill?.image).url()).height}
          unoptimized={true}
          alt={`${skill?.title} Skill`}
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  )
}
