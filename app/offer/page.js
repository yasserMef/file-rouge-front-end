"use client";
import { useEffect, useState } from "react";
import Jobs from "../components/home/Jobs";
import Search from "../components/home/Search";
import Value from "../components/home/Value";

import { usePathname, useRouter } from "next/navigation";
import Pagination from "../utils/Paginate";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [searchContra, setSearchContra] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchLevel, setSearchLevel] = useState("");
  const [page, setPage] = useState(0);
  const [countPage, setCountPage] = useState(0);
  const pathname = usePathname();
  const router = useRouter();



  // Fetch data function
  const getData = async (queryParams = "") => {
    const url = queryParams
      ? `http://localhost:8000/v1/api/offerInfo/?${queryParams}`
      : `http://localhost:8000/v1/api/offerInfo/`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      const data = await response.json();
      setCountPage(data.paginationResults.numberOfPages)
      console.log(data.paginationResults.numberOfPages)
      return data.data || [];
    } catch (error) {
      console.error("Erreur : ", error);
      return [];
    }
  };
  const onPress =(val)=>{
    setPage(val)
  }
  
  useEffect(()=>{
  console.log(page)
  },[page])

  // Fetch jobs
  const fetchJobs = async () => {
    const params = new URLSearchParams();
    if (searchCompany) params.append("societeName", searchCompany);
    if (searchLocation) params.append("location", searchLocation);
    if (searchJob) params.append("jobname", searchJob);
    if (searchContra) params.append("contractType", searchContra);
    if (searchType) params.append("jobType", searchType);
    if (page) params.append("page", page);
   // console.log(page)
    const queryParams = params.toString();
    const jobResults = await getData(queryParams);
    
    setJobs(jobResults);
  };

  // Search by contract type
  const searchByContrat = (value) => {
    setSearchContra(value);
  };

  const clearAllSearch = ()=>{
    setSearchContra("")
    setSearchType("")
    setSearchLevel("")
  }
  const clSearch = async() =>{
    if(searchCompany=="" && searchJob=="" && searchLocation=="" &&searchContra=="" && searchType ==""&& searchLevel=="" && page==0){
      const jobResults = await getData("");
    setJobs(jobResults);
    }else{
      fetchJobs();
    }
  }
  
  useEffect(() => {
    clSearch()
  }, [searchCompany , searchJob , searchLocation,searchContra , searchType , searchLevel,page]);


  return (
    <div>
      <Search
        searchCompany={(value) => setSearchCompany(value)}
        searchLocation={(value) => setSearchLocation(value)}
        searchJob={(value) => setSearchJob(value)}
        searchByContrat={searchByContrat}
        clearAllSearch = {clearAllSearch}
        changeByType={(value)=>setSearchType(value)}
        changeByLevel={(value)=>setSearchLevel(value)}
      />
      <Jobs jobs={jobs} />
      {countPage > 1 ? <Pagination onPress={onPress} countPage={countPage} /> : null}
      
      <Value />
    </div>
  );
}
