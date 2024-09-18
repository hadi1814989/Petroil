import React from 'react'
import serImg1 from "../assets/ser-img1.png"
import serImg2 from "../assets/ser-img2.png"
import serImg3 from "../assets/ser-img3.png"

const Services = () => {
  return (
  <section>
    <div className="flex flex-wrap">
        <div className="w-full lg:w-2/4 pl-[13%]">
        <h2 className='font-bold text-[64px] font-pops lg:pt-[60px] leading-[82px] lg:leading-[70px]'>Our Services</h2>
        <p className=' w-[70%] lg:w-[405px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className="w-full lg:w-2/4 relative before:absolute  before:h-[100%] before:w-full before:content-[''] before:bg-[rgba(0,0,0,0.6)]">
        <img src={serImg1} alt="" />
        <div className=" ">  
        <h3 className='absolute lg:left-[60px] lg:top-[80px] sm:left-[72px] xl:left-[72px] left-[31px] top-[38px] xl:top-[140px] sm:top-[140px] text-white lg:text-[36px] text-[26px] font-bold font-pops xl:leading-[54px] leading-[30px] '>National fuel distribution and supply.
            <button className='absolute xl:left-[9px] left-[9px] xl:top-[64px] top-[73px] text-white text-[16px] font-semibold font-pops border-2 border-white py-[-0.5rem] px-[2rem] hover:bg-[#f40404] hover:border-[#f40404] duration-200'>Learn More</button>
        </h3>
        </div>
        </div>
        <div className="w-full lg:w-2/4 relative before:absolute before:h-[100%] before:w-full before:content-[''] before:bg-[rgba(0,0,0,0.6)]">
        <img src={serImg2} alt="" />
        <div className=" ">  
        <h3 className='absolute lg:left-[60px] lg:top-[80px] sm:left-[72px] xl:left-[72px] left-[31px] top-[38px] xl:top-[140px] sm:top-[140px] text-white lg:text-[36px] text-[26px] font-bold font-pops xl:leading-[54px] leading-[30px] '>National fuel distribution and supply.
            <button className='absolute xl:left-[9px] left-[9px] xl:top-[64px] top-[73px] text-white text-[16px] font-semibold font-pops border-2 border-white py-[-0.5rem] px-[2rem] hover:bg-[#f40404] hover:border-[#f40404] duration-200'>Learn More</button>
        </h3>
        </div>
        </div>
        <div className="w-full lg:w-2/4 relative before:absolute  before:h-[100%] before:w-full before:content-[''] before:bg-[rgba(0,0,0,0.6)]">
        <img src={serImg3} alt="" />
        <div className=" ">  
        <h3 className='absolute lg:left-[60px] lg:top-[80px] sm:left-[72px] xl:left-[72px] left-[31px] top-[38px] xl:top-[140px] sm:top-[140px] text-white lg:text-[36px] text-[26px] font-bold font-pops xl:leading-[54px] leading-[30px] '>National fuel distribution and supply.
            <button className='absolute xl:left-[9px] left-[9px] xl:top-[64px] top-[73px] text-white text-[16px] font-semibold font-pops border-2 border-white py-[-0.5rem] px-[2rem] hover:bg-[#f40404] hover:border-[#f40404] duration-200'>Learn More</button>
        </h3>
        </div>
        </div>
    </div>
  </section>
  )
}

export default Services