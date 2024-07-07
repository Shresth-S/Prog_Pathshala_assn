import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { HiGlobeAlt } from "react-icons/hi2";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

const End = () => {
  return (
    <div>
        <div className='bg-gray8 flex h-80 w-full pt-20 pb-10 px-40 text-white justify-around gap-72'>
            <div className='flex flex-col justify-between'>
                <div className='flex gap-2'>
                    <img className='h-8 w-11 mt-1' src="/logo2.png" alt="" />
                      <span className='text-3xl font-semibold '>Nexcent</span>
                </div>
                <div className='text-base font-light'>
                    <span>Copyright © 2020 Nexcent ltd.</span><br />
                    <span>All rights reserved</span>
                </div>
                <div className='flex justify-between'>
                      <FaSquareInstagram className='h-6 w-6 hover:cursor-pointer'/>
                      <HiGlobeAlt className='h-6 w-6 hover:cursor-pointer'/>
                      <FaTwitterSquare className='h-6 w-6 hover:cursor-pointer'/>
                      <FaYoutubeSquare className='h-6 w-6 hover:cursor-pointer'/>
                </div>  
            </div>
              
            <div className='flex justify-evenly w-2/3'>
                <div className='flex flex-col gap-1 hover:cursor-pointer'>
                  <span className='text-lg font-semibold'>Company</span> <br />
                  <span className='font-light'>About</span>
                  <span className='font-light'>Blog</span>
                  <span className='font-light'>Contact</span>
                  <span className='font-light'>Pricing</span>
                  <span className='font-light'>Testimonials</span>
                </div> 
                <div className='flex flex-col gap-1 hover:cursor-pointer'>
                  <span className='text-lg font-semibold'>Support</span> <br />
                  <span className='font-light'>Help center</span>
                  <span className='font-light'>Terms of service</span>
                  <span className='font-light'>Legal</span>
                  <span className='font-light'>Privacy policy</span>
                  <span className='font-light'>Status</span>
                </div> 
                <div className='flex flex-col gap-1'>
                  <span className='text-lg font-semibold'>Stay up to date</span> <br />
                  <input className='bg-gray8 text-myWhite rounded-lg p-2 px-4' type="text" placeholder='Your email address'/>
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default End