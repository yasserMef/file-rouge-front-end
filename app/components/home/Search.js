import React ,{useState,useEffect} from 'react';
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

function Search({searchCompany , searchClick ,  searchLocation , searchJob , searchByContrat}) {
  
   const searchByCompany =(e)=>{
    searchCompany(e.target.value)
  }
  const searchByLocation =(e)=>{
    searchLocation(e.target.value)
  }
  
const searchByJob =(e)=>{
  searchJob(e.target.value)
} 

const searchByTypeContrat = (e)=>{
  searchByContrat(e.target.value)
}


  return (
    <div className=' searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-4 md:p-[3rem]'>
      <form className=' container' action=''>
        <div className='firstDiv flex flex-col md:flex-row justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
         
          <div className='flex gap-2 items-center w-full md:w-auto'>
            <AiOutlineSearch className='text-[25px] icon' />
            <input 
              type='text' 
              className='bg-transparent text-blue-500 focus:outline-none w-full md:w-[100%]' 
              placeholder='Search Job Here...'
              onChange={searchByJob}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>

          <div className='flex gap-2 items-center w-full md:w-auto'>
            <BsHouseDoor className='text-[25px] icon' />
            <input 
              type='text' 
              className='bg-transparent text-blue-500 focus:outline-none w-full md:w-[100%]' 
              placeholder='Search By Company...'
              onChange={searchByCompany}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>

          <div className='flex gap-2 items-center w-full md:w-auto'>
            <CiLocationOn className='text-[25px] icon' />
            <input 
              type='text' 
              className='bg-transparent text-blue-500 focus:outline-none w-full md:w-[100%]' 
              placeholder='Search By Location...'
              onChange={searchByLocation}
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon ' />
          </div>
        
          <button onClick={searchClick} className='bg-blueColor p-2 px-4 rounded-[8px] text-white cursor-pointer hover:bg-blue-300'>
            Search
          </button>
        </div>
      </form>
       
      <div className='secDiv flex flex-col md:flex-row items-center gap-4 md:gap-10 justify-center'>
  <div className='singleSearch flex items-center gap-2'>
    <label htmlFor='relevance' className='text-[#808080] font-semibold'>Sort by</label>
    <select  onChange={searchByTypeContrat}  name='' id='relevance' className='bg-white rounded-[3px] px-4 py-1'>
      <option value='CDI'>CDI</option>
      <option value='CDD'>CDD</option>
      <option value='Freelance'>Freelance</option>
      <option value='Stage'>Stage</option>
    </select>
  </div>

  <div className='singleSearch flex items-center gap-2'>
    <label htmlFor='type' className='text-[#808080] font-semibold'>Type</label>
    <select name='' id='type' className='bg-white rounded-[3px] px-4 py-1'>
      <option value=''>Full-time</option>
      <option value=''>Remote</option>
      <option value=''>Contract</option>
      <option value=''>Part-time</option>
    </select>
  </div>

  <div className='singleSearch flex items-center gap-2'>
    <label htmlFor='level' className='text-[#808080] font-semibold'>Level</label>
    <select name='' id='level' className='bg-white rounded-[3px] px-4 py-1'>
      <option value=''>Senior</option>
      <option value=''>Beginner</option>
      <option value=''>Intermediate</option>
      <option value=''>Advocate</option>
    </select>
  </div>
   <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>
   </div>
    </div>
  )
}

export default Search;