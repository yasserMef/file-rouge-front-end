import React from 'react';
import { BiTimeFive } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";  
import { useEffect, useState } from 'react';

// Your formatDate function
const formatDate = (creationDate) => {
  const date = new Date(creationDate);
  const now = new Date();

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid date"; // Return a message for invalid dates
  }

  // Calculate the time difference in seconds
  const diffInSeconds = Math.floor((now - date) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInSeconds / 3600);
  const diffInDays = Math.floor(diffInSeconds / 86400);

  // Determine how to display the time difference
  if (diffInSeconds < 60) {
    return "now"; // Less than a minute ago
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`; // Minutes
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`; // Hours
  } else {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`; // Days
  }
};

let socket;
function Jobs({ jobs }) {
  const router = useRouter();
  




  return (
    <div>
      <div className='jobContainer flex flex-wrap justify-center gap-6 py-10'>
        {jobs.map((job) => (
          <div key={job._id} className='group group/item singleJob w-full sm:w-[300px] p-[20px] bg-blue rounded-[10px] 
            hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg transition-all duration-300'>
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>
                {job.offer}
              </h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive />
                {formatDate(job.creationDate)} 
              </span>
            </span>
            <h6 className='text-[rgb(204,204,204)]'>{job.location}</h6>
            <p className='text-[13px] text-[#959559] pt-[20px] border-t-[2px] 
              mt-[20px] group-hover:text-white'>
                {job.offerInscription}
            </p>
            <div className='company flex items-center gap-2'>
              <img src={job.file} alt='company logo' className='w-[20%] rounded-full' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{job.societeName}</span>
            </div>
            <button 
              onClick={() => router.push(`/jobdetail/${job._id}`)}  
              className='border-[2px] rounded-[10px] block p-[10px] w-full 
              text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
              Postuler Maintenant
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
