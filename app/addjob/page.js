import React from 'react';

function Page() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Informations pour Trouver un Emploi
        </h2>
        <form action="#" method="POST" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Entrez votre nom"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Prénom
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Entrez votre prénom"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="address"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Adresse
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Entrez votre adresse"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Expérience
              </label>
              <textarea
                id="experience"
                name="experience"
                placeholder="Décrivez votre expérience"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                defaultValue={""}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="language"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Niveau de Langue
              </label>
              <select
                id="language"
                name="language"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="" disabled selected>
                  Choisissez votre niveau
                </option>
                <option value="beginner">Débutant</option>
                <option value="intermediate">Intermédiaire</option>
                <option value="advanced">Avancé</option>
                <option value="fluent">Courant</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="cv"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Télécharger CV
              </label>
              <input
                type="file"
                id="cv"
                name="cv"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Entrez votre email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Téléphone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Entrez votre numéro de téléphone"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="picture"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Photo de Profil (Facultatif)
            </label>
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;