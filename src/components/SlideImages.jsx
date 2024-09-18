import React from 'react'
import img1 from "../assets/slide-img-1.png"
import img2 from "../assets/slide-img-2.png"
import img3 from "../assets/slide-img-3.png"
import img4 from "../assets/slide-img-4.png"

const SlideImages = () => {
  return (
 <section className='mb-[28px]'>
 <div className=" gap-5 flex flex-wrap">
    <div className="xl:w-[24%] w-[47%]"><img src={img1} alt="" /></div>
    <div className="xl:w-[24%] w-[47%]"><img src={img2} alt="" /></div>
    <div className="xl:w-[24%] w-[47%]"><img src={img3} alt="" /></div>
    <div className="xl:w-[24%] w-[47%]"><img src={img4} alt="" /></div>
 </div>
 </section>
  )
}

export default SlideImages