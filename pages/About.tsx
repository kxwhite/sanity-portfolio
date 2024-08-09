import React from 'react'
import ProfilePic from "/assets/ProfilePic.jpeg";
import { motion } from "framer-motion"
import { PageInfoType } from '@/types';
import { urlFor } from '@/sanity.config';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';


type Props = {
  pageInfo: PageInfoType;
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{ height: '150vh' }}
      className='relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 overflow-hidden rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        >
          {pageInfo?.profilePic && (
            <Image
              className='object-cover h-full'
              // className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
              loader={() => urlFor(pageInfo?.profilePic).url()}
              src={urlFor(pageInfo?.profilePic).url()}
              width={getImageDimensions(urlFor(pageInfo?.profilePic).url()).width}
              height={getImageDimensions(urlFor(pageInfo?.profilePic).url()).height}
              unoptimized={true}
              priority={true}
              alt="Profile Pic"
            />
          )}
      </motion.div>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a{" "}
          <span className='underline decoration-[#F7AB0A]'>little</span>
          &nbsp;background
        </h4>
        <p className='text-base'>{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  )
}
