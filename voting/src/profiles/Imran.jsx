// Imran.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Use a different icon from react-icons

function Imran() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/student/imran.jpeg" 
            alt="Imran Khan" 
            className="h-64 w-64 rounded-full object-cover border-4 border-blue-300"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Candidate Name: Imran Khan</h1>
            <p className="text-lg text-gray-700 mb-4">
              <FaStar className="inline-block text-blue-500 mr-2" /> 
              Imran Khan is a prominent political figure and leader, known for his strong vision and dedication to public service.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Life Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Led a successful political movement with significant impact.</li>
              <li>Implemented key reforms in education and health sectors.</li>
              <li>Recognized globally for his contributions to social welfare.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Background</h2>
            <p className="text-gray-800">
              Imran Khan has a distinguished career as a leader, philanthropist, and visionary. His work in transforming the political landscape and contributing to the well-being of the nation has earned him widespread respect and acclaim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imran;
