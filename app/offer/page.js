"use client";
import { useEffect, useState } from "react";
import Jobs from "../components/home/Jobs";
import Search from "../components/home/Search";
import Value from "../components/home/Value";
import { usePathname, useRouter } from "next/navigation";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [searchContra, setSearchContra] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  if (pathname !== "/offer") {
    router.push("/offer");
  }

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
      return data.data || [];
    } catch (error) {
      console.error("Erreur : ", error);
      return [];
    }
  };

  // Fetch jobs
  const fetchJobs = async () => {
    const params = new URLSearchParams();
    if (searchCompany) params.append("societeName", searchCompany);
    if (searchLocation) params.append("location", searchLocation);
    if (searchJob) params.append("jobname", searchJob);
    if (searchContra) params.append("contractType", searchContra);

    const queryParams = params.toString();
    const jobResults = await getData(queryParams);
    
    setJobs(jobResults);
  };

  // Search by contract type
  const searchByContrat = (value) => {
    setSearchContra(value);
  };

  // Handle search click
  const handleSearchClick = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  // Empty dependency array to run only once on component mount

  // Fetch jobs on initial load
  useEffect(() => {
    fetchJobs();
  }, []);



  return (
    <div>
      <Search
        searchCompany={(value) => setSearchCompany(value)}
        searchLocation={(value) => setSearchLocation(value)}
        searchJob={(value) => setSearchJob(value)}
        searchByContrat={searchByContrat}
        searchClick={handleSearchClick}
      />
      <Jobs jobs={jobs} />
      <Value />
    </div>
  );
}
