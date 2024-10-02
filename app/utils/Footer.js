'use client'
import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";

function Footer() {
  const user = JSON.parse(localStorage.getItem("user"))
  return (

          <div>
            {
              user && (<div className='footer p-8 md:p-12 lg:p-20 mb-4 bg-blueColor rounded-2xl grid gap-8 
                grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto items-start justify-center'>
                  
                  {/* Logo Section */}
                  <div className='text-center md:text-left'>
                    <div className='logoDiv'>
                      <h1 className='logo text-2xl md:text-3xl text-white pb-4 md:pb-6'>
                        <strong>Job</strong>Search
                      </h1>
                    </div>
                    <p className='text-white pb-4 opacity-70 leading-7'>
                      We always make sure our seekers and companies find the best jobs and employers find the best candidates.
                    </p>
                  </div>
            
                  {/* Company Section */}
                  <div className='flex flex-col'>
                    <span className='divTitle text-lg md:text-xl font-semibold pb-4 md:pb-6 text-white'>
                      Company
                    </span>
                    <ul className='flex flex-col gap-2 md:gap-3 m-0 p-0'>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>About Us</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Features</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>News</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>FAQ</li>
                    </ul>
                  </div>
            
                  {/* Resources Section */}
                  <div className='flex flex-col'>
                    <span className='divTitle text-lg md:text-xl font-semibold pb-4 md:pb-6 text-white'>
                      Resources
                    </span>
                    <ul className='flex flex-col gap-2 md:gap-3 m-0 p-0'>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Support</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Privacy Policy</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Terms of Service</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Contact Us</li>
                    </ul>
                  </div>
            
                  {/* Support Section */}
                  <div className='flex flex-col'>
                    <span className='divTitle text-lg md:text-xl font-semibold pb-4 md:pb-6 text-white'>
                      Support
                    </span>
                    <ul className='flex flex-col gap-2 md:gap-3 m-0 p-0'>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Events</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Promo</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Reg Demo</li>
                      <li className='text-white opacity-70 hover:opacity-100 cursor-pointer'>Careers</li>
                    </ul>
                  </div>
                
                  {/* Contact Info Section */}
                  <div className='flex flex-col items-center md:items-start'>
                    <span className='divTitle text-lg md:text-xl font-semibold text-white mb-2'>
                      Contact Info
                    </span>
                    <small className='text-sm md:text-base text-white'>
                      jobsearch@outlook.ma
                    </small>
                    <div className='icons flex justify-center gap-4 py-4'>
                      <AiFillInstagram className='bg-white h-8 w-8 rounded-full icon text-blueColor' />
                      <BsFacebook className='bg-white h-8 w-8 rounded-full icon text-blueColor' />
                      <RiTwitterXLine className='bg-white h-8 w-8 rounded-full icon text-blueColor' />
                    </div>
                  </div>
                
                </div>)
            }
          </div>
        
  );
}

export default Footer;