"use client";
import React,{useState}  from 'react';

function Page({params}) {
  const[name , setName] = useState("")
  const[lastName , setLastName] = useState("")
  const[adress , setAdress] = useState("")
  const[experience , setExperience] = useState("")
  const[nivLan , setNivLang] = useState("")
  const[cv , setCv] = useState(null)
  const[email , setEmail] = useState("")
  const[phone , setPhone] = useState("")
  

  const changeName = (e)=>{
    setName(e.target.value)
  }
  const changeLastName = (e)=>{
   setLastName(e.target.value)
  }
  const changeAdress = (e)=>{
    setAdress(e.target.value)
  }
  const changeExp = (e)=>{
    setExperience(e.target.value)
  }
  const changeLang = (e)=>{
    setNivLang(e.target.value)
  }
  const changeEmail = (e)=>{
    setEmail(e.target.value)
  }
  const changeCv = (e)=>{
    setCv(e.target.files[0])
  }
  const changePhone = (e)=>{
    setPhone(e.target.value)
  }
 

  const createFormData = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("adress", adress);
    formData.append("experience", experience);
    formData.append("language", nivLan);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("file", cv);
    formData.append("offer", params.id);
    return formData;
  };
  
  const addOffer = async (e) => {
    e.preventDefault(); 
    console.log("hello")
    const formData = createFormData();
    try {
      const response = await fetch("http://localhost:8000/v1/api/offer", {
        method: "POST",
        body: formData, // Envoi de FormData sans Content-Type
        headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
       });
      const data = await response.json();
      console.log(data)

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (err) {
      console.error("Erreur lors de l'ajout d'offer travail:", err);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 lg:p-16 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Informations pour Trouver un Emploi
        </h2>
        <form action="#" method="POST" encType="multipart/form-data" onSubmit={addOffer}>
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
                onChange={changeName}
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
                onChange={changeLastName}
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
                onChange={changeAdress}
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
                onChange={changeExp}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="language"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Niveau de Langue Anglais
              </label>
              <select
                id="language"
                name="language"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                onChange={changeLang}
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
                onChange={changeCv}
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
                onChange={changeEmail}
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
                onChange={changePhone}
              />
            </div>
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