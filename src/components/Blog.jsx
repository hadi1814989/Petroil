import React from 'react'

const Blog = () => {
  return (
    <section className='bg-[#F0F0F0] py-[110px]'>
        <div className="max-w-Container mx-auto">
           <div className="sm:flex inline-block gap-10 sm:gap-[0.5rem]">
           <div className="w-full sm:w-[32%] bg-blogImg bg-cover bg-no-repeat bg-center h-[401px] z-[1] relative after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1]">
            <h2 className='text-white font-bold lg:text-[24px] lg:leading-[36px] font-pops lg:pt-[75px] lg:pb-[52px] lg:px-[45px] md:text-[23px] md:leading-[37px]  md:pt-[30px] md:pb-[35px] sm:pt-[28px] sm:pb-[30px] md:px-[45px] text-[24px] leading-[36px]  pt-[75px] pb-[52px] px-[45px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <button className='lg:mb-[55px] py-[10px] px-[22px] text-white bg-[rgba(255,255,255,0.5)] ml-[45px] hover:text-white hover:bg-[#f40404] hover:border-[#f40404]'>Read more</button>
           </div>
            <div className="w-full sm:w-[32%] bg-blogImg2 bg-cover bg-no-repeat bg-center h-[401px] z-[1] relative after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1]">
            <h2 className='text-white font-bold lg:text-[24px] lg:leading-[36px] font-pops lg:pt-[75px] lg:pb-[52px] lg:px-[45px] md:text-[23px] md:leading-[37px]  md:pt-[30px] md:pb-[35px] sm:pt-[28px] sm:pb-[30px] md:px-[45px] text-[24px] leading-[36px]  pt-[75px] pb-[52px] px-[45px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <button className='lg:mb-[55px] py-[10px] px-[22px] text-white bg-[rgba(255,255,255,0.5)] ml-[45px] hover:text-white hover:bg-[#f40404] hover:border-[#f40404]'>Read more</button>
            </div>
            <div className="w-full sm:w-[32%] bg-blogImg3 bg-cover bg-no-repeat bg-center h-[401px] z-[1] relative after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full after:bg-[rgba(0,0,0,0.6)] after:z-[-1]">
            <h2 className='text-white font-bold lg:text-[24px] lg:leading-[36px] font-pops lg:pt-[75px] lg:pb-[52px] lg:px-[45px] md:text-[23px] md:leading-[37px]  md:pt-[30px] md:pb-[35px] sm:pt-[28px] sm:pb-[30px] md:px-[45px] text-[24px] leading-[36px]  pt-[75px] pb-[52px] px-[45px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <button className='lg:mb-[55px] py-[10px] px-[22px] text-white bg-[rgba(255,255,255,0.5)] ml-[45px] hover:text-white hover:bg-[#f40404] hover:border-[#f40404]'>Read more</button>
            </div>
           </div>
           <div className="">
            <h4 className='font-bold font-pops text-[16px] leading-[24px] text-right pt-[29px]'>MORE FROM THE BLOG</h4>
           </div>
        </div>
    </section>
  )
}

export default Blog