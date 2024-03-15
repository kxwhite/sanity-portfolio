import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils';
import ProfilePic from "/assets/ProfilePic.jpeg";
import Link from 'next/link';
import { PageInfoType } from '@/types';
import { urlFor } from '@/sanity.config';

type Props = {
  pageInfo: PageInfoType;
}

export default function Hero({pageInfo}: Props) {
  const [text, helper] = useTypewriter({
    words: [
      `Hi, The Name\'s ${pageInfo?.name.split(" ")[0]}`,
      'Guy-who-loves-Tea.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000,
  })

  const srcImage = urlFor(pageInfo?.heroImage).url();
  // const src  = {
  //   srcImage: urlImg,
  //   srcWidth: getImageDimensions(urlImg).width
  // };
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full w-32 h-32 mx-auto object-cover'
        loader={() => srcImage}
        src={srcImage}
        width={getImageDimensions(srcImage).width}
        height={getImageDimensions(srcImage).height}
        unoptimized={true}
        priority={true}
        alt="Profile Picture"
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          {pageInfo.role}
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='gold'/>
        </h1>

        <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
