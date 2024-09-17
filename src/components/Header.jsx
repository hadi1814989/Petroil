import React, { useState } from 'react'
import logo from "../assets/logo-img.png"
import { HiMiniBars4 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


const Header = () => {
    // let [show , setShow] = useState(false)
    let [down , setDown] = useState(true)
    let dropMenu = () => {
      setDown(down)
    }
  return (
   <section className='bg-[#F40404] py-4'>
    <div className='max-w-Container m-auto'>
    <div className="flex items-center lg:justify-normal justify-around">
        <div className="w-1/4">
        <img className='lg:my-0 my-5'  src={logo} alt="" />
        </div>
        <div className="w-3/4 hidden lg:block">
        <ul className='flex text-white gap-x-8 justify-end'>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3'>Home</li>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3'>About</li>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3'>Services</li>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3'>Gallery</li>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3'>Blog</li>
            <li className='text-[16px] font-pops font-semibold hover:text-[#282828] ease-in-out duration-500 p-3 px-7 border-2 border-[#fff] hover:border-[#282828] rounded-lg'>Contact</li>
        </ul> 
        </div>
        <div className="lg:hidden cursor-pointer" onClick={dropMenu} >
            {/* {show == true ?  <RxCross2 className='text-white text-3xl opacity-0 hover:opacity-[1]' />:  <Menu as="div" className="relative inline-block text-center">
      <div>
        <MenuButton >
        <HiMiniBars4 className='text-white text-4xl ' />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
             Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Gallery
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Blog
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contact
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu> } */}
    {down && (<Menu as="div" className="relative inline-block text-center">
      <div>
        <MenuButton >
        <HiMiniBars4 className='text-white text-4xl'onMouseMove={()=> setDown(down)} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-500 data-[leave]:duration-300 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
             Home
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
              About
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
              Services
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
              Gallery
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
              Blog
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-[#f40404] data-[focus]:text-white"
            >
              Contact
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu> )}

        </div>
    </div>
    {/* <HiMiniBars4 className='text-white text-4xl' /> */}
   
   </div>
   </section>
  )
}

export default Header