import React from 'react'

export const Banner = () => {
  return (
    <section className='bg-bannerImg bg-cover bg-no-repeat bg-center  lg:py-[257px] py-[200px]  z-[1] relative after:absolute after:left-0 after:top-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1]'>
     <div className="max-w-Container mx-auto">
      <h2 className=' text-white font-bold lg:text-[64px] text-[58px] font-pops leading-[96px] lg:w-[842px] w-full pb-[80px]'>We exist since 1975 on the oil and gas industry.</h2>
     <div className="text-center lg:text-left">
     <button className='py-[14px] px-[41px] border-2  border-white text-white hover:bg-[#f40404] duration-300 hover:border-[#f40404]'>LEARN MORE</button>
     </div>
     </div>
    </section>
  )
}
