import React, { useState } from 'react'
import { motion } from "framer-motion"
import ProjectPic from '../assets/ProjectPic.png'
import { ProjectType } from '@/types';
import { urlFor } from '@/sanity.config';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import useWindowDimensions from '../hooks/getWindowDimensions';
import useMediaQuery from '@/hooks/useMediaQuery';

type Props = {
  projects: ProjectType[];
}

export default function Projects({projects}: Props) {
  const { width } = useWindowDimensions();
  const isSmallScreen = useMediaQuery('(max-width: 600px)');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='sm:h-[150vh] h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
      >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects?.map((project, index) => (
          <div
            key={project?._id}
            className='sm:h-[100vh] w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <Image
                className={`rounded-md object-cover w-auto h-96 sm:h-[200px]`}
                loader={() => urlFor(project?.image).url()}
                src={urlFor(project?.image).url()}
                width={getImageDimensions(urlFor(project?.image).url()).width}
                height={getImageDimensions(urlFor(project?.image).url()).height}
                unoptimized={true}
                alt=""
              />
            </motion.div>

            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className={`text-4xl font-semibold text-center sm:text-2xl`}>
                <span className='underline decoration-[#F7AB0A]'>Case study {index + 1} of {projects?.length}:<br /></span>
                &nbsp;{project?.title}
              </h4>

              <div className='flex justify-center'>
               {project?.technologies.map(technology => (
                  <Image
                    className='mr-2 w-10 h-10 rounded-full object-contain'
                    key={technology?._id}
                    loader={() => urlFor(technology?.image).url()}
                    src={urlFor(technology?.image).url()}
                    width={getImageDimensions(urlFor(technology?.image).url()).width}
                    height={getImageDimensions(urlFor(technology?.image).url()).height}
                    unoptimized={true}
                    alt=""
                  />
              ))}
              </div>
              <p className='text-lg text-center md:text-left sm:text-ellipsis sm:max-h-48'>
                {project?.summary}
                {/* {project?.summary.length > 100 && isSmallScreen ? `${project?.summary.slice(0, 100)}...` : project?.summary} */}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='absolute w-full  top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}
