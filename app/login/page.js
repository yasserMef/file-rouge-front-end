"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import notify from "../utils/Notfication";
import {ToastContainer} from "react-toastify"

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      console.log("Attempting to log in");
      const response = await fetch("http://localhost:8000/v1/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
     

      const data = await response.json();
      console.log("Server response:", data.message);

      // Store the user data and redirect after successful login
      if(data.message =="password invalid" ||  data.message=="no user for this email"){
      notify("probleme mot de passe ou  email", "error");
        return;
      }else{
        console.log("hello")
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("token", JSON.stringify(data.tokenL));
      }
   

      if(data.data.role == "user"){
        setTimeout(() => {
          router.push("/offer")
          router.refresh()
        }, 3000);

      }else{
        setTimeout(() => {
          router.push("/listjob")   
          router.refresh()     
        }, 3000);
    }
    notify("connexion réussie" ,"success")
      
    } catch (err) {
      console.error("Error during login:", err);
    }
  };
 
 const user = JSON.parse(localStorage.getItem("user"))
 const token = JSON.parse(localStorage.getItem("token"))
 if(!token){
   router.push("/login");
 }

  if(user!=null && token!=null && user.role == "company"){
    router.push("/listjob");
  }else if(user!=null && token!=null && user.role == "user"){
    router.push("/offer");
  }else{
    router.push("/login");
  }

  return (
    <div className="font-[sans-serif] bg-white md:h-screen">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[85%] w-full h-full object-contain block mx-auto"
            alt="login image"
          />
        </div>
        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto" onSubmit={loginUser}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-yellow-400">Connexion</h3>
            </div>
            <div>
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                  placeholder="Entrez l'email"
                  onChange={changeEmail}
                  value={email}
                />
                {/* Email Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path
                      fill="none"
                      strokeMiterlimit={10}
                      strokeWidth={40}
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    />
                    <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" />
                  </g>
                </svg>
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
                  onChange={changePassword}
                  value={password}
                />
                {/* Password Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                </svg>
              </div>
            </div>
            <div className="mt-8">
               <p className="text-white text-sm">
                <a
                   href="javascript:void(0);"
                  className="text-yellow-400 font-semibold hover:underline"
                  >
                 Oublie mot de passe ?
                </a>
                </p>
              </div>
            <div className="mt-12">
              <button
                type="submit"
                
                className="w-max shadow-xl py-3 px-6 text-sm text-gray-800 font-semibold rounded-md  bg-yellow-400 hover:bg-yellow-500 focus:outline-none"
              >
                Connexion
              </button>
              <p className="text-sm text-white mt-8">
                Vous n'avez pas de compte ?{" "}
                <a
                  href="/signup"
                  className="text-yellow-400 font-semibold hover:underline ml-1"
                >
                  Inscrivez-vous ici
                </a>
              </p>
            </div>
            <ToastContainer/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
