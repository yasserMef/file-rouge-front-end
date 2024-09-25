"use client";
import { useEffect, useState } from "react";
import Jobs from "./components/home/Jobs";
import Search from "./components/home/Search";
import Value from "./components/home/Value";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchCompany, setSearchCompany] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchJob, setSearchJob] = useState("");
  const [searchContra, setSearchContra] = useState("");

  // Fonction pour récupérer les données avec ou sans filtres
  const getData = async (queryParams = "") => {
    const url = queryParams
      ? `http://localhost:8000/v1/api/offerInfo/?${queryParams}`
      : `http://localhost:8000/v1/api/offerInfo/`;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          
        },
      });

      if (!response.ok) {
        console.error("Erreur lors de la récupération des données");
        return [];
      }

      const data = await response.json();
      return data.data || []; // Supposons que les données soient dans `data.data`
    } catch (error) {
      console.error("Erreur : ", error);
      return [];
    }
  };

  // Fonction principale pour exécuter la recherche
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

  // Gérer la sélection du type de contrat
  const searchByContrat = (value) => {
    setSearchContra(value); // Mise à jour de l'état sans appel immédiat à fetchJobs()
  };

  // Utilisation de useEffect pour appeler fetchJobs lorsque searchContra change
  useEffect(() => {
    if (searchContra) {
      fetchJobs(); // Recherche jobs lorsque searchContra est mis à jour
    }
  }, [searchContra]);

  // Gère le clic sur le bouton de recherche
  const handleSearchClick = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  // Charger les jobs au démarrage sans filtre
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
