import React from 'react';

function page() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
          Détails de l'Annonce de Travail
        </h2>
        {/* Nom de la société */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Nom de la Société:</h3>
          <p className="text-gray-700">nom</p>
        </div>
        {/* Inscription de l'offre */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Inscription de l'Offre:</h3>
          <p className="text-gray-700">description</p>
        </div>
        {/* Ville */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Ville:</h3>
          <p className="text-gray-700">ville</p>
        </div>
        {/* Date de création */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Date de Création de l'Offre:</h3>
          <p className="text-gray-700">date</p>
        </div>
        {/* Salaire */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Salaire:</h3>
          <p className="text-gray-700">salaire DH</p>
        </div>
        {/* Type de contrat */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Type de Contrat:</h3>
          <p className="text-gray-700">Contrat</p>
        </div>
        {/* Type de travail */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Type de Travail:</h3>
          <p className="text-gray-700">Travaile</p>
        </div>
        {/* Niveau d'expérience */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Niveau d'Expérience:</h3>
          <p className="text-gray-700">experience</p>
        </div>
        {/* Button for applying */}
        <div className="text-center mt-8">
          <button
                   className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
 
          >
            Demander un emploi
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;