// Tayyab.jsx
import React from 'react';
import { FaMoon } from 'react-icons/fa'; // Using FaMoon for a Turkish symbol

function Tayyab() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/student/Tayyab.jpeg" 
            alt="Tayyab Erdogan" 
            className="h-64 w-64 rounded-full object-cover border-4 border-red-600"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-red-700 mb-2">Candidate Name: Tayyab Erdogan</h1>
            <p className="text-lg text-gray-700 mb-4">
              <FaMoon className="inline-block text-red-600 mr-2" /> 
              Tayyab Erdogan is a distinguished political leader known for his leadership and influence in modern Turkish politics.
            </p>
            <h2 className="text-2xl font-semibold text-red-600 mb-2">Life Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Served as President and Prime Minister of Turkey.</li>
              <li>Implemented numerous economic and infrastructural reforms.</li>
              <li>Played a significant role in regional and international politics.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-red-600 mb-2">Professional Background</h2>
            <p className="text-gray-800">
              Tayyab Erdogan has a long and impactful career in Turkish politics. His leadership has brought significant changes to Turkey's economic policies and governance, and he continues to be a pivotal figure in shaping the nation's future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tayyab;
