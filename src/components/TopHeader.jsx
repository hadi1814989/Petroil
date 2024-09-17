import React from 'react'
import { MdOutlineMail} from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const TopHeader = () => {
  return (
   <section className='py-2 bg-hbg'>
    <div className='max-w-Container mx-auto'>
       <div className='flex items-center flex-wrap'>
        <div className='w-full lg:w-1/4'>
        <div className="flex items-center justify-center lg:justify-start gap-x-2">
          <MdOutlineMail className='text-white' />
          <p className='text-white font-pops'>mail@yourcompany.com</p>
        </div>
        </div>
        <div className='w-full lg:w-1/4'>
        <div className="flex items-center py-2 lg:py-0 justify-center lg:justify-start gap-x-2">
          <LuPhoneCall className="text-white" />
          <p className="text-white font-pops">+896 120 5889 (Toll free)</p>
        </div>
        </div>
        <div className='w-full lg:w-2/4'>
        <div className="flex lg:justify-end justify-center  gap-x-5">
        <FaFacebookF className='text-white' />
        <FaTwitter className='text-white' />
        <FaLinkedinIn className='text-white' />
        <IoLogoInstagram className='text-white' />
        </div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default TopHeader