import React, { useEffect, useState } from 'react'
import { BiTimeFive } from "react-icons/bi";

function Jobs({jobs}) {
return (
    <div>
      <div className='jobContainer flex flex-wrap justify-center gap-6 py-10'>
        {jobs.map((job, index) => (
          <div key={index} className='group group/item singleJob w-full sm:w-[300px] p-[20px] bg-blue rounded-[10px] 
            hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-all duration-300'>
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                {job.offer}
              </h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />Now
              </span>
            </span>
            <h6 className='text-[rgb(204,204,204)]'>{job.location}</h6>
            <p className='text-[13px] text-[#959559] pt-[20px] border-t-[2px] 
              mt-[20px] group-hover:text-white'>
              Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
            </p>
            <div className='company flex items-center gap-2'>
              <img src={job.imageSociete} alt='company logo' className='w-[20%] rounded-full' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{job.societeName}</span>
            </div>
            <button  className='border-[2px] rounded-[10px] block p-[10px] w-full 
              text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
              Postuler Maintenant
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs;