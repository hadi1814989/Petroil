import React from 'react'
import Logof from "../assets/logo-img.png"
import { MdOutlineMail} from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import card1 from "../assets/cardImg.png"
import card2 from "../assets/cardImg2.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
  <>
  <section className='bg-[#1f1f1f] pt-[149px] pb-[170px] border-t-2 border-t-[#FFB800]'>
   <div className="max-w-Container mx-auto">
   <div className="flex flex-wrap">
        <div className="xl:w-[30%] w-[100%] text-white">
        <div className="flex justify-center xl:justify-start">
        <img className='pb-[33px]' src={Logof} alt="" />
        </div>
            <div className="flex items-center justify-center xl:justify-start gap-x-2">
          <MdOutlineMail className='text-white' />
          <p className='text-white font-pops'>mail@yourcompany.com</p>
        </div>
        <div className="flex items-center py-2 lg:py-0 justify-center xl:justify-start gap-x-2">
          <LuPhoneCall className="text-white" />
          <p className="text-white font-pops py-[15px]">+896 120 5889 (Toll free)</p>
        </div>
        <div className="flex items-center py-2 lg:py-0 justify-center xl:justify-start gap-x-2">
          <FaMapLocationDot className="text-white " />
          <p className="text-white font-pops">101 Baker Street, New York, USA, 12345</p>
        </div>
        <div className="flex  xl:justify-start justify-center  gap-x-5 mt-[34px]">
      <div className="border-white border-2 p-3 rounded-full hover:border-[#f40404] hover:bg-[#f40404] duration-300">
      <FaFacebookF className='text-white'/>
      </div>
      <div className="border-white border-2 p-3 rounded-full hover:border-[#f40404] hover:bg-[#f40404] duration-300">
      <FaTwitter className='text-white' />
      </div>
       <div className="border-white border-2 p-3 rounded-full hover:border-[#f40404] hover:bg-[#f40404] duration-300">
       <FaLinkedinIn className='text-white' />
       </div>
       <div className="border-white border-2 p-3 rounded-full hover:border-[#f40404] hover:bg-[#f40404] duration-300">
       <IoLogoInstagram className='text-white' />
       </div>
        </div>
        </div>
        <div className="xl:w-[18%] w-[40%] text-white ml-[15%]">
            <h2 className='font-pops font-bold text-[16px] pb-[21px] pt-[25px]'>Company</h2>
            <ul>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Home</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>About</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Services</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Gallary</li>
            </ul>
        </div>
        <div className="xl:w-[18%] w-[40%] text-white ml-[5%]">
            <h2 className='font-pops font-bold text-[16px] pb-[21px] pt-[25px]'>Others</h2>
            <ul>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Blog</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Content</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Terms & Conditions</li>
                <li className='font-pops font-[400] text-[14px] pb-[15px]'>Privacy Policy</li>
            </ul>
        </div>
        <div className="xl:w-[14%] w-[100%] text-white xl:text-left text-center">
        <h2 className='font-pops font-bold text-[16px] pb-[21px] pt-[25px]'>Certificate</h2>
       <div className="flex xl:justify-start justify-center gap-1">
       <img src={card1} alt="" />
       <img src={card2} alt="" />
       </div>
        </div>
    </div>
   </div>
  </section>
   <section className='bg-[#282828] py-[43px]'>
   <div className="max-w-Container mx-auto">
   <p className='text-[#6C6C6C] font-pops font-medium text-[16px]'>© Copyright 2022 by AltDesain Studio – All right reserved.</p>
   </div>
   </section>
  </>
  )
}

export default Footer