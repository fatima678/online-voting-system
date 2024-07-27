
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication state (localStorage, context, etc.)
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-slate-500 via-slate-700 to-slate-800 p-2 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <img src="/src/assets/vote.jpg" alt="Logo" className="h-14 w-14 rounded-3xl" /> {/* Adjust the size as needed */}
            <Link to="/" className="text-white text-2xl font-bold">E-voting system</Link>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            {/* <Link to="/candidateprofile" className="text-white hover:text-gray-200">Candidate Profile</Link> */}
            <Link to="/home" className="text-white hover:text-gray-200">Home</Link>
            <Link to="/aboutUs" className="text-white hover:text-gray-200">About Us</Link>
            <Link to="/contactUs" className="text-white hover:text-gray-200">Contact Us</Link>
      
          </div>
          {/* Logout Button */}
          <div>
            <button
              onClick={handleLogout}
              className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-black transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
