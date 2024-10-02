'use client';
import React, { useEffect, useState , useRef } from 'react';
import { useRouter } from "next/navigation";




function Page() {
  const router = useRouter();
  const [offers, setOffers] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCv, setSelectedCv] = useState(null);

  const slidesRef = useRef(null)

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:8000/v1/api/offer", {
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

  const getOffers = async () => {
    const data = await getData();
    setOffers(data);
  };

  useEffect(() => {
    getOffers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/v1/api/offer/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      const data = await response.json();
      console.log(data);
      // Refresh the offers after deletion
      getOffers();
    } catch (error) {
      console.error("Erreur : ", error);
    }
  };

  const uploadCv = (file)=>{
    window.open(file, '_blank');
  }

   return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Liste des Demandes de Travail
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prénom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Adresse</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expérience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Niveau de Langue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CV</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Téléphone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {offers.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.adress}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.experience}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.language}</td>
                  <td ref={slidesRef} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <p onClick={()=>uploadCv(app.file)} className="text-blue-600 hover:underline cursor-pointer">
                      Voir CV
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button onClick={() => handleDelete(app._id)} className="text-red-600 hover:underline">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

   
    </div>
  );
}

export default Page;
