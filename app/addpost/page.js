import React from 'react'

function page() {
  return (
    <div class="bg-gray-100">
 <div className="flex justify-center items-center min-h-screen">
  <form className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl">
    <h2 className="text-3xl font-bold mb-8 text-center">
      Ajouter une Annonce de Travail
    </h2>
    {/* Nom de la société */}
    <div className="mb-6">
      <label
        htmlFor="societe-name"
        className="block text-gray-700 font-bold mb-2"
      >
        Nom de la Société
      </label>
      <input
        type="text"
        id="societe-name"
        placeholder="Nom de la société"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      />
    </div>
    {/* Inscription offre */}
    <div className="mb-6">
      <label
        htmlFor="offer-inscription"
        className="block text-gray-700 font-bold mb-2"
      >
        Inscription de l'Offre
      </label>
      <textarea
        id="offer-inscription"
        placeholder="Description de l'offre"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
        defaultValue={""}
      />
    </div>
    {/* Image de la société */}
    <div className="mb-6">
      <label
        htmlFor="image-societe"
        className="block text-gray-700 font-bold mb-2"
      >
        Image de la Société
      </label>
      <input
        type="file"
        id="image-societe"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    {/* Ville */}
    <div className="mb-6">
      <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
        Ville
      </label>
      <input
        type="text"
        id="city"
        placeholder="Ville"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      />
    </div>
    {/* Date de création de l'offre */}
    <div className="mb-6">
      <label
        htmlFor="creation-date"
        className="block text-gray-700 font-bold mb-2"
      >
        Date de Création de l'Offre
      </label>
      <input
        type="date"
        id="creation-date"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      />
    </div>
    {/* Salaire */}
    <div className="mb-6">
      <label htmlFor="salary" className="block text-gray-700 font-bold mb-2">
        Salaire
      </label>
      <input
        type="number"
        id="salary"
        placeholder="Salaire"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      />
    </div>
    {/* Type de contrat */}
    <div className="mb-6">
      <label
        htmlFor="contract-type"
        className="block text-gray-700 font-bold mb-2"
      >
        Type de Contrat
      </label>
      <select
        id="contract-type"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      >
        <option value="" disabled="" selected="">
          Choisir un type de contrat
        </option>
        <option value="CDI">CDI</option>
        <option value="CDD">CDD</option>
        <option value="Freelance">Freelance</option>
        <option value="Stage">Stage</option>
      </select>
    </div>
    {/* Type de travail */}
    <div className="mb-6">
      <label htmlFor="job-type" className="block text-gray-700 font-bold mb-2">
        Type de Travail
      </label>
      <select
        id="job-type"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      >
        <option value="" disabled="" selected="">
          Choisir un type de travail
        </option>
        <option value="Temps plein">Temps plein</option>
        <option value="Temps partiel">Temps partiel</option>
        <option value="Remote">Remote</option>
      </select>
    </div>
    {/* Niveau d'expérience */}
    <div className="mb-6">
      <label
        htmlFor="experience-level"
        className="block text-gray-700 font-bold mb-2"
      >
        Niveau d'Expérience
      </label>
      <select
        id="experience-level"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
      >
        <option value="" disabled="" selected="">
          Choisir un niveau
        </option>
        <option value="Junior">Junior</option>
        <option value="Intermédiaire">Intermédiaire</option>
        <option value="Senior">Senior</option>
      </select>
    </div>
    {/* Bouton de soumission */}
    <div className="text-center">
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Soumettre l'Annonce
      </button>
    </div>
  </form>
</div>


    </div>
  )
}

export default page