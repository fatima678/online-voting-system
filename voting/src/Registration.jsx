import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import vote from './assets/vote.jpg'; // Replace with your image path

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400 py-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl flex flex-col md:flex-row">
        <div className="md:w-1/2 flex justify-center items-center mb-4 md:mb-0">
          <img src={vote} alt="Register" className="w-full h-auto object-cover rounded-md"/>
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-3xl text-slate-800 mb-4 font-bold text-center">Registration</h2>
          <p className="mb-4 text-gray-500 font-light text-center">Create your account. It's free and only takes a minute</p>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-3">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="w-full bg-slate-600 text-white py-2 rounded-lg shadow-md hover:bg-slate-800 mt-4">
              Register now
            </button>
          </form>
          <p className="mt-4 text-center">Already have an account?</p>
          <Link to="/login" className="block text-center text-slate-600 hover:underline mt-2">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;