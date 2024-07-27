import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path if necessary

function CandidateRegistration() {
  const [fullname, setFullName] = useState('');
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [society, setSociety] = useState('');
  const [position, setPosition] = useState('');
  const [symbol, setSymbol] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register-candidate', { fullname, department, semester, society, position, symbol })
      .then(result => {
        setSuccessMessage('Candidate registered successfully!');
        setTimeout(() => {
          navigate('/home');
        }, 3000); // Redirect after 3 seconds
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Navbar /> {/* Adding Navbar component */}
      <div className="min-h-screen bg-gray-400 py-6 pt-24"> {/* Added pt-24 to create space for the Navbar */}
        <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl mx-auto">
          <h2 className="text-3xl text-slate-800 mb-4 font-bold text-center">Candidate Registration</h2>
          {successMessage && (
            <div className="bg-green-200 text-green-700 p-4 mb-4 rounded">
              {successMessage}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
              <div className="mb-3">
                <label htmlFor="fullname" className="block text-gray-700 font-bold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  name="fullname"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullname}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="department" className="block text-gray-700 font-bold mb-1">
                  Department
                </label>
                <input
                  type="text"
                  placeholder="Enter department"
                  name="department"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setDepartment(e.target.value)}
                  value={department}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
              <div className="mb-3">
                <label htmlFor="semester" className="block text-gray-700 font-bold mb-1">
                  Semester
                </label>
                <input
                  type="text"
                  placeholder="Enter semester"
                  name="semester"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setSemester(e.target.value)}
                  value={semester}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="society" className="block text-gray-700 font-bold mb-1">
                  Society
                </label>
                <input
                  type="text"
                  placeholder="Enter society"
                  name="society"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setSociety(e.target.value)}
                  value={society}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3">
              <div className="mb-3">
                <label htmlFor="position" className="block text-gray-700 font-bold mb-1">
                  Position
                </label>
                <select
                  name="position"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setPosition(e.target.value)}
                  value={position}
                >
                  <option value="">Select position</option>
                  <option value="President">President</option>
                  <option value="Vice President">Vice President</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="symbol" className="block text-gray-700 font-bold mb-1">
                  Symbol
                </label>
                <input
                  type="text"
                  placeholder="Enter symbol"
                  name="symbol"
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                  onChange={(e) => setSymbol(e.target.value)}
                  value={symbol}
                />
              </div>
            </div>
            <button className="w-full bg-slate-600 text-white py-2 rounded-lg shadow-md hover:bg-slate-800 mt-4">
              Register Candidate
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CandidateRegistration;
