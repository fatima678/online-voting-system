// Maryam.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa'; // Using FaStar as a placeholder icon

function Maryam() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center">
          <img 
            src="/student/maryam.jpeg" 
            alt="Maryam Nawaz" 
            className="h-64 w-64 rounded-full object-cover border-4 border-blue-300"
          />
          <div className="md:ml-8 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Candidate Name: Maryam Nawaz</h1>
            <p className="text-lg text-gray-700 mb-4">
              <FaStar className="inline-block text-blue-500 mr-2" /> 
              Maryam Nawaz is a prominent political figure and leader known for her contributions to social and political reforms.
            </p>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Life Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 mb-4">
              <li>Active in political campaigns and advocacy.</li>
              <li>Focused on improving women's rights and social issues.</li>
              <li>Influential in shaping national policy and governance.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Background</h2>
            <p className="text-gray-800">
              Maryam Nawaz has made significant contributions to political leadership and social reforms. Her work in advocating for women's rights and influencing policy has earned her a prominent place in the political arena.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maryam;
