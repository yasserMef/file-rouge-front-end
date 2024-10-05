"use client";
import React ,{useState , useRef    } from 'react'
import notify from '../utils/Notfication';
import { ToastContainer } from 'react-toastify';

function page() {
  const[companyName , setCompanyName] = useState("")
  const[offer , setOffer] = useState("")
  const[inscription , setInscription] = useState("")
  const[companyPicture , setCompanyPicture] = useState(null)
  const[city , setCity] = useState("")
  const[salary , setSalary] = useState("")
  const[typeContrat , setTypeContrat] = useState("")
  const[jobType , setJobType] = useState("")
  const[nivExp , setNivExp] = useState("")
  const fileRef = useRef()

  const changeCompanyName = (e)=>{
    setCompanyName(e.target.value)
  }
  const changeCompanyOffer = (e)=>{
   setOffer(e.target.value)
  }
  const changeOfferInscription = (e)=>{
    setInscription(e.target.value)
  }
  const onchangeCompanyPicture = (e)=>{
    setCompanyPicture(e.target.files[0])
  }
  const changeCity = (e)=>{
    setCity(e.target.value)
  }
  const changeSalary = (e)=>{
    setSalary(e.target.value)
  }
  const changeContractType = (e)=>{
    setTypeContrat(e.target.value)
  }
  const changeJobType = (e)=>{
    setJobType(e.target.value)
  }
  const changeNivExper = (e)=>{
    setNivExp(e.target.value)
  }

  const createFormData = () => {
    const formData = new FormData();
    formData.append("societeName", companyName);
    formData.append("offer", offer);
    formData.append("offerInscription", inscription);
    formData.append("file", companyPicture);
    formData.append("city", city);
    formData.append("salary", salary);
    formData.append("contractType", typeContrat);
    formData.append("jobType", jobType);
    formData.append("experienceLevel", nivExp);
    return formData;
  };
  
  const addJob = async (e) => {
    e.preventDefault(); 
    console.log("hello")
    const formData = createFormData();
    try {
      const response = await fetch("http://localhost:8000/v1/api/offerInfo", {
        method: "POST",
        body: formData, // Envoi de FormData sans Content-Type
        headers:{
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
       });
      const data = await response.json();
      console.log(data)
      if(data.message == "Job created successfully"){
         notify("annonce bien ajouté" , "success")
         setCompanyName("")
         setCity("")
         fileRef.current.value=''
         setSalary("")
         setTypeContrat("")
         setJobType("")
         setNivExp("")
         setInscription("")
         setOffer("")

      }

      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
    } catch (err) {
      console.error("Erreur lors de l'ajout d'offer travail:", err);
    }
  };
  return (
    <div class="bg-gray-100">
 <div className="flex justify-center items-center min-h-screen">
  <form className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl" >
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
        required="nom de société est obligatoir"
        onChange={changeCompanyName}
        value={companyName}
      />
    </div>

    <div className="mb-6">
      <label
        htmlFor="societe-name"
        className="block text-gray-700 font-bold mb-2"
      >
        Offer
      </label>
      <input
        type="text"
        id="societe-name"
        placeholder="Nom de la société"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required=""
        onChange={changeCompanyOffer}
        value={offer}
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
        onChange={changeOfferInscription}
        value={inscription}
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
        required=""
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onchangeCompanyPicture}
        ref={fileRef}
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
        onChange={changeCity}
        value={city}
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
        onChange={changeSalary}
        value={salary}
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
        onChange={changeContractType}
        value={typeContrat}
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
        onChange={changeJobType}
        value={jobType}
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
        onChange={changeNivExper}
        value={nivExp}
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
        onClick={addJob}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Soumettre l'Annonce
      </button>
    </div>
    <ToastContainer />
  </form>
</div>
</div>
  )
}

export default page