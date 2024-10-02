import React from 'react';

const page = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
        <h1 className="text-4xl font-bold text-center mb-6">À Propos de Nous</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Qui sommes-nous ?</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              JobSearch est une plateforme innovante dédiée à faciliter la recherche d'emploi pour les candidats, tout en offrant aux entreprises les outils nécessaires pour trouver les talents qu'ils recherchent. Depuis notre création en 2024, nous avons aidé des milliers de candidats à trouver un emploi et des entreprises à pourvoir leurs postes avec succès.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Notre Mission</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Notre mission est de créer un lien fort entre les chercheurs d'emploi et les employeurs. Nous croyons en l'importance de faciliter la connexion entre les personnes qualifiées et les entreprises à la recherche de compétences spécifiques. Grâce à notre interface intuitive et à nos outils de recherche avancés, nous offrons une expérience fluide à tous nos utilisateurs.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Pourquoi choisir JobSearch ?</h2>
            <ul className="mt-4 list-disc list-inside text-gray-600 leading-relaxed">
              <li>Un large choix d'offres d'emploi dans divers secteurs.</li>
              <li>Des outils puissants pour filtrer et trouver les meilleures opportunités.</li>
              <li>Des conseils personnalisés pour améliorer votre CV et votre candidature.</li>
              <li>Une plateforme sécurisée pour protéger vos données personnelles.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Nos Valeurs</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Chez JobSearch, nous sommes animés par des valeurs de transparence, d'intégrité et d'innovation. Nous nous engageons à fournir une expérience utilisateur exceptionnelle tout en assurant une accessibilité équitable à toutes les opportunités d'emploi disponibles sur notre plateforme.
            </p>
          </div>
        </div>
      </div>
  );
};

export default page;
