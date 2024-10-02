'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"

function Navbar({postuler}) {
  const router = useRouter();
  // State to manage the profile dropdown and mobile menu toggle
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the profile dropdown menu
  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push("/login") 
    router.refresh()
   }

   const user = JSON.parse(localStorage.getItem("user"))


  return (
   <div>
    {user && (  <nav className="bg-white shadow-lg ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* Logo */}
              <a href="/" className="text-xl font-bold text-blue-600">
                JobFinder
              </a>
              {/* Navbar Links (hidden on mobile) */}
              <div className="hidden md:flex space-x-4 ml-10">
                <a href={user && user.role == "user" ? "/offer" : "/listjob"} className="text-gray-600 hover:text-blue-600">
                  Accueil
                </a>
                {user && user.role == "company" ?<a href="/addpost" className="text-gray-600 hover:text-blue-600">
                  Poste d'Emploi
                </a> : null }
  
                <a href="/apply" className="text-gray-600 hover:text-blue-600">
                  {postuler}
                </a>
                <a href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </a>
              </div>
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
  
            {/* Profile Photo and Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="flex items-center justify-center focus:outline-none"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
              </button>
  
              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <p onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                    Déconnexion
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
  
        {/* Mobile Menu (visible when toggled) */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
              Accueil
            </a>
            <a href="/jobs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
              Offres d'Emploi
            </a>
            <a href="/apply" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
              Postuler
            </a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>
        )}
      </nav>) }
   </div>

    
  );
}

export default Navbar;
