// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError('');
//     setPasswordError('');
//     axios.post("http://localhost:3001/login", { email, password })
//       .then(result => {
//         console.log(result);
//         if (result.data === "success") {
//           navigate('/home');
//         } else {
//           if (result.data === "invalid_email") {
//             setEmailError("Invalid email");
//           } else if (result.data === "incorrect_password") {
//             setPasswordError("Incorrect password");
//           }
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         setEmailError("An error occurred. Please try again.");
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-500">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
//         <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               name="email"
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <p className="text-red-500 text-sm h-4">{emailError}</p>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               name="password"
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <p className="text-red-500 text-sm h-4">{passwordError}</p>
//           </div>
//           <button className="w-full bg-slate-600 text-white py-2 rounded-lg shadow-md hover:bg-slate-800 focus:outline-none">
//             Login now
//           </button>
//         </form>
//         <p className="mt-4 text-center">Don't have an account?</p>
//         <Link to="/register" className="block text-center text-slate-600 hover:underline mt-2">
//           Register now
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;



// testing

// src/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          localStorage.setItem('isAuthenticated', 'true'); // Set authentication state
          navigate('/home');
        } else {
          if (result.data === "invalid_email") {
            setEmailError("Invalid email");
          } else if (result.data === "incorrect_password") {
            setPasswordError("Incorrect password");
          }
        }
      })
      .catch(err => {
        console.log(err);
        setEmailError("An error occurred. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-red-500 text-sm h-4">{emailError}</p>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-sm h-4">{passwordError}</p>
          </div>
          <button className="w-full bg-slate-600 text-white py-2 rounded-lg shadow-md hover:bg-slate-800 focus:outline-none">
            Login now
          </button>
        </form>
        <p className="mt-4 text-center">Don't have an account?</p>
        <Link to="/register" className="block text-center text-slate-600 hover:underline mt-2">
          Register now
        </Link>
      </div>
    </div>
  );
}

export default Login;