import React from 'react'

const Contact = () => {
  return (
   <section className='bg-[#f40404] py-[46px]'>
    <div className="max-w-Container mx-auto">
    <div className="sm:flex">
        <div className="md:w-[80%] sm:w-[73%]">
            <h2 className='text-white font-pops font-bold text-[35px] text-center lg:text-[36px] sm:text-[26px] leading-[54px]'>Want to join as member branch in your area?</h2>
        </div>
        <div className="md:w-[20%] sm:w-[25%] text-center">
            <button className='text-white py-[14px] sm:mt-0 mt-2 px-[31px] border-2 border-white bg-[#f40404] font-semibold font-pops text-[16px] hover:text-[#f40404] duration-200 text-right hover:bg-white'>CONTACT</button>
        </div>
    </div>
    </div>
   </section>
  )
}

export default Contact