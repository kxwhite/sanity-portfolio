import React from 'react'
import { motion } from "framer-motion"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"
import { PageInfoType } from '@/types'

type Props = {
  pageInfo: PageInfoType;
}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactMe({pageInfo}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${pageInfo?.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative h-screen flex flex-col overflow-hidden text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center px-10'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.&nbsp;
          <span className='underline decoration-[#F7AB0A]/50'>Lets Talk.</span>
        </h4>

        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.phoneNumber}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.email}</p>
          </div>

          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{pageInfo?.address}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' type="text" className='contactInput'/>
              <input {...register('email')}placeholder='Email' type="email" className='contactInput'/>
            </div>

              <input {...register('subject')} placeholder='Subject' type="text" className='contactInput'/>

              <textarea {...register('message')} placeholder='Message' className='contactInput' />
              <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
