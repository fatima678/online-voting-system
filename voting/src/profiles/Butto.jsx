// Butto.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using FaStar as a placeholder icon

function Butto() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/student/butto.jpeg" 
            alt="Benazir Bhutto" 
            className="h-64 w-64 rounded-full object-cover border-4 border-blue-300"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Candidate Name: Benazir Bhutto</h1>
            <p className="text-lg text-gray-700 mb-4">
              <FaStar className="inline-block text-blue-500 mr-2" /> 
              Benazir Bhutto was a trailblazing political leader known for her pioneering role in advancing democracy and women's rights.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Life Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>First woman to head a democratic government in a majority Muslim nation.</li>
              <li>Advocated for women's rights and social justice.</li>
              <li>Played a significant role in modernizing the country's political landscape.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Background</h2>
            <p className="text-gray-800">
              Benazir Bhutto was a prominent political figure who served as the Prime Minister of Pakistan. Her tenure was marked by efforts to bring social reforms and improve the welfare of the citizens. She remains an iconic symbol of women's empowerment and democracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Butto;
