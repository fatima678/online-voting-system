// Nawz.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using FaStar as a placeholder icon

function Nawz() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/student/nawz.jpeg" 
            alt="Mian Nawaz Shareef" 
            className="h-64 w-64 rounded-full object-cover border-4 border-blue-300"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Candidate Name: Mian Nawaz Shareef</h1>
            <p className="text-lg text-gray-700 mb-4">
              <FaStar className="inline-block text-blue-500 mr-2" /> 
              Mian Nawaz Shareef is a prominent political leader known for his impactful role in the country's development.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Life Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Served as Prime Minister of Pakistan multiple times.</li>
              <li>Implemented significant economic and infrastructure reforms.</li>
              <li>Played a crucial role in improving national policies and governance.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Background</h2>
            <p className="text-gray-800">
              Mian Nawaz Shareef has a distinguished career in politics with a focus on economic development and governance. His leadership has had a lasting impact on the country’s political landscape and infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nawz;
