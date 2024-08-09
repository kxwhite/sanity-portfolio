import React from 'react'
import { motion } from "framer-motion"
import ProfilePic from "/assets/ProfilePic.jpeg";
import ReactIcon from "/assets/ReactIcon.png";
import Image from 'next/image';
import { ExperienceType } from '@/types';
import { urlFor } from '@/sanity.config';
import { getImageDimensions } from '@sanity/asset-utils';

type Props = {
  experience: ExperienceType;
}

export default function ExperienceCard({experience}: Props) {
   const firstDate = new Date(experience?.dateStarted);
   const startDate = firstDate.toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const secondDate = new Date(experience?.dateEnded);
  const endDate = secondDate.toLocaleDateString('en-UK', {
   year: 'numeric',
   month: 'short',
   day: 'numeric',
 });
  // console.log("Start Date: ",startDate,", End Date: ", endDate)
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className='rounded-full md:rounded-full w-32 h-32 object-cover object-center'
          loader={() => urlFor(experience?.companyImage).url()}
          src={urlFor(experience?.companyImage).url()}
          width={getImageDimensions(urlFor(experience?.companyImage).url()).width}
          height={getImageDimensions(urlFor(experience?.companyImage).url()).height}
          unoptimized={true}
          alt={`${experience?.company} Logo`}
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map(technology => (
            <Image
              key={technology?._id}
              className='w-10 h-10 rounded-full object-contain'
              loader={() => urlFor(technology?.image).url()}
              src={urlFor(technology?.image).url()}
              width={getImageDimensions(urlFor(technology?.image).url()).width}
              height={getImageDimensions(urlFor(technology?.image).url()).height}
              unoptimized={true}
              alt={`${technology?.title} Logo`}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {startDate} - {experience?.isCurrentlyWorkingHere ? "Present" : endDate}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg max-h-44 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]'>
          {experience?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
