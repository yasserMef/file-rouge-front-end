"use client";
import React, { useState  } from "react";
import { useRouter } from "next/navigation";
function Page() {
  const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [image, setImage] = useState(null);

  
  
  const changeUserType = (e) => {
    setUserType(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  const changeProfileImage = (e) => {
    setImage(e.target.files[0]);

  };

  const createFormData = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("role", userType);
    formData.append("file", image);
    return formData;
  };
  
  const addUser = async (e) => {
    e.preventDefault(); 
    console.log(image)
    const formData = createFormData();
    try {
      const response = await fetch("http://localhost:8000/v1/api/auth/signup", {
        method: "POST",
        body: formData, 
      });

      const data = await response.json();
      console.log(data)
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      
      console.log("Réponse du serveur:", data);
      router.push("/login")
    } catch (err) {
      console.error("Erreur lors de l'ajout de l'utilisateur:", err);
    }
  };

  return (
    <div>
      <div className="font-[sans-serif] bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
              alt="image de connexion"
            />
          </div>
          <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
            <form className="max-w-lg w-full mx-auto" onSubmit={addUser}>
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-yellow-400">Créer un compte</h3>
              </div>
              <div>
                <label className="text-white text-xs block mb-2">Nom complet</label>
                <div className="relative flex items-center">
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Entrez le nom"
                    onChange={changeName}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Entrez l'email"
                    onChange={changeEmail}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Mot de passe</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Entrez le mot de passe"
                    onChange={changePassword} // Changement ici
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Confirmer le mot de passe</label>
                <div className="relative flex items-center">
                  <input
                    name="confirm_password"
                    type="password"
                    required
                    className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                    placeholder="Confirmez le mot de passe"
                    onChange={changeConfirmPass}
                  />
                </div>
              </div>

              {/* Profile Image Input */}
              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Image de profil</label>
                <div className="relative flex items-center">
                  <input
                    name="profile_image"
                    type="file"
                    className="w-full text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none bg-[#0C172C]"
                    accept="image/*"
                    onChange={changeProfileImage}
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="text-white text-xs block mb-2">Type d'utilisateur</label>
                <select
                  name="user_type"
                  className="w-full text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none bg-[#0C172C]"
                  onChange={changeUserType}
                  defaultValue='user'
                >
                  <option value="user">Utilisateur</option>
                  <option value="company">Société</option>
                </select>
              </div>

              <div className="mt-12">
                <button
                  type="submit" // Changement ici
                  className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
                >
                  Register
                </button>

                <p className="text-sm text-white mt-8">
                  Vous avez déjà un compte ?{' '}
                  <a
                    href="/login"
                    className="text-yellow-400 font-semibold hover:underline ml-1"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page; // Changement du nom pour suivre la convention de nommage
