"use client";
import React , {useEffect , useState} from 'react';
import { useRouter } from "next/navigation";

function page({params}) {
  const router = useRouter();
  const [offer , setOffer] = useState({})
  
  
  const getOffer = async() =>{
    const response = await fetch(`http://localhost:8000/v1/api/offerInfo/${params.id}` , {
      method: 'GET', headers:{
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
   });
    const data = await response.json();
    console.log(data)
    return data.data
  }
 const getData = async() =>{
  const dt = await getOffer()
  console.log(JSON.parse(localStorage.getItem("token")))
  setOffer(dt)
  }

  useEffect(() => {
    
    getData();

  }, []) 
  
  
  
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Détails de l'Annonce de Travail
        </h2>
        {/* Nom de la société */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Nom de la Société:</h3>
          <p className="text-gray-700">{offer.societeName}</p>
        </div>
        {/* Inscription de l'offre */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Inscription de l'Offre:</h3>
          <p className="text-gray-700">{offer.offerInscription}</p>
        </div>
        {/* Ville */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Ville:</h3>
          <p className="text-gray-700">{offer.city}</p>
        </div>
        {/* Date de création */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Date de Création de l'Offre:</h3>
          <p className="text-gray-700">{offer.creationDate}</p>
        </div>
        {/* Salaire */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Salaire:</h3>
          <p className="text-gray-700">{offer.salary} DH</p>
        </div>
        {/* Type de contrat */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Type de Contrat:</h3>
          <p className="text-gray-700">{offer.contractType}</p>
        </div>
        {/* Type de travail */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Type de Travail:</h3>
          <p className="text-gray-700">{offer.jobType}</p>
        </div>
        {/* Niveau d'expérience */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Niveau d'Expérience:</h3>
          <p className="text-gray-700">{offer.experienceLevel}</p>
        </div>
        {/* Button for applying */}
        <div className="text-center mt-8">
          <button
                   className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={()=> router.push(`/addoffer/${offer._id}`)}
          >
            Demander un emploi
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;