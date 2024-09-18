import React from 'react'
const About = () => {
  return (
    <section className='bg-[#eee3e3be] lg:py-[136px]'>
        <div className="max-w-Container mx-auto">
        <div className="lg:flex md:flex">
            <div className="lg:w-[35%] md:w-[35%] w-full bg-[#f40404]">
                <h2 className='lg:py-[100px] lg:px-[76px] md:px-[50px] py-5 text-center px-5 text-white font-pops text-[36px] leading-[54px] font-bold'>Learn more about our company</h2>
            </div>
            <div className="lg:w-[65%] md:w-[65%] w-full bg-aboutImg bg-cover bg-no-repeat bg-center h-[361px]">
           <div className=" text-center lg:my-[25%] md:my-[25%] my-0">
           <button className='text-[#f40404] py-[14px] px-[40px] border-2 mt-[25%] lg:mt-0 md:mt-0 bg-white border-[#fff] hover:border-[#f40404] hover:bg-[#f40404] duration-300 hover:text-white'>Learn More</button>
           </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default About