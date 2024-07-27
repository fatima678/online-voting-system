// // // import React from 'react';

// // // function CastVote() {
// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// // //       <h2 className="text-4xl font-bold text-center">Cast Your Vote</h2>
// // //     </div>
// // //   );
// // // }

// // // export default CastVote;
// // import React, { useState } from 'react';

// // function CastVote() {
// //   const [vote, setVote] = useState('');

// //   const handleInputChange = (event) => {
// //     setVote(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     // Add your submission logic here
// //     console.log("Vote cast:", vote);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100">
// //       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
// //         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-4">
// //             <label className="text-xl font-medium text-gray-700 mb-2 block">
// //               Enter Candidate Number:
// //             </label>
// //             <input
// //               type="number"
// //               value={vote}
// //               onChange={handleInputChange}
// //               min="1"
// //               max="1"
// //               className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //               placeholder="Enter your vote"
// //               required
// //             />
// //           </div>
// //           <button
// //             type="submit"
// //             className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
// //           >
// //             Caste
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CastVote;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CastVote() {
//   const { id } = useParams(); // Get candidate ID from URL
//   const [candidate, setCandidate] = useState(null); // State for candidate data
//   const [voteValue, setVoteValue] = useState(''); // State for vote value
//   const [message, setMessage] = useState('');
//   const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast

//   useEffect(() => {
//     const fetchCandidate = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/candidates/${id}`);
//         setCandidate(response.data);
//       } catch (error) {
//         console.error('Error fetching candidate data:', error);
//         setMessage('Error fetching candidate data.');
//       }
//     };

//     fetchCandidate();
//   }, [id]);

//   const handleVoteChange = (event) => {
//     setVoteValue(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!voteValue) {
//       setMessage('Vote value cannot be empty.');
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:3001/cast-vote', {
//         candidateId: id,
//         voteValue
//       });
//       setMessage('Vote cast successfully!');
//       setVoteCasted(true); // Disable the button
//       console.log('Vote cast:', response.data);
//     } catch (error) {
//       setMessage('There was an error casting your vote.');
//       console.error('There was an error casting your vote!', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
//         {candidate ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate ID:
//               </label>
//               <input
//                 type="text"
//                 value={candidate._id}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate Name:
//               </label>
//               <input
//                 type="text"
//                 value={candidate.fullname}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Enter Your Vote:
//               </label>
//               <input
//                 type="number"
//                 value={voteValue}
//                 onChange={handleVoteChange}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 placeholder="Enter vote value"
//                 required
//                 disabled={voteCasted} // Disable if vote is casted
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
//               disabled={voteCasted} // Disable if vote is casted
//             >
//               Cast Vote
//             </button>
//           </form>
//         ) : (
//           <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
//         )}
//         {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default CastVote;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CastVote() {
//   const { id } = useParams(); // Get candidate ID from URL
//   const [candidate, setCandidate] = useState(null); // State for candidate data
//   const [voteValue, setVoteValue] = useState(''); // State for vote value
//   const [message, setMessage] = useState('');
//   const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast

//   useEffect(() => {
//     // Fetch candidate data when component mounts
//     const fetchCandidate = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/candidates/${id}`);
//         setCandidate(response.data);
//       } catch (error) {
//         console.error('Error fetching candidate data:', error);
//         setMessage('Error fetching candidate data.');
//       }
//     };

//     fetchCandidate();
//   }, [id]);

//   const handleVoteChange = (event) => {
//     setVoteValue(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!voteValue) {
//       setMessage('Vote value cannot be empty.');
//       return;
//     }
//     try {
//       // Post vote value to the server
//       const response = await axios.post('http://localhost:3001/cast-vote', {
//         candidateId: id,
//         voteValue
//       });
//       setMessage('Vote cast successfully!');
//       setVoteCasted(true); // Disable the button
//       console.log('Vote cast:', response.data);
//     } catch (error) {
//       setMessage('There was an error casting your vote.');
//       console.error('There was an error casting your vote!', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
//         {candidate ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate ID:
//               </label>
//               <input
//                 type="text"
//                 value={candidate._id}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate Name:
//               </label>
//               <input
//                 type="text"
//                 value={candidate.fullname}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Enter Your Vote:
//               </label>
//               <input
//                 type="number"
//                 value={voteValue}
//                 onChange={handleVoteChange}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 placeholder="Enter vote value"
//                 required
//                 disabled={voteCasted} // Disable if vote is casted
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
//               disabled={voteCasted} // Disable if vote is casted
//             >
//               Cast Vote
//             </button>
//           </form>
//         ) : (
//           <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
//         )}
//         {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default CastVote;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CastVote() {
//   const { id } = useParams(); // Get candidate ID from URL
//   const [candidate, setCandidate] = useState(null); // State for candidate data
//   const [voteValue, setVoteValue] = useState(''); // State for vote value
//   const [message, setMessage] = useState('');
//   const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast

//   useEffect(() => {
//     // Fetch candidate data when component mounts
//     const fetchCandidate = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/candidates/${id}`);
//         setCandidate(response.data);
//       } catch (error) {
//         console.error('Error fetching candidate data:', error);
//         setMessage('Error fetching candidate data.');
//       }
//     };

//     fetchCandidate();
//   }, [id]);

//   const handleVoteChange = (event) => {
//     setVoteValue(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!voteValue) {
//       setMessage('Vote value cannot be empty.');
//       return;
//     }
//     try {
//       // Post vote value to the server
//       const response = await axios.post('http://localhost:3001/cast-vote', {
//         candidateId: id,
//         voteValue
//       });
//       setMessage('Vote cast successfully!');
//       setVoteCasted(true); // Disable the button
//       console.log('Vote cast:', response.data);
//     } catch (error) {
//       setMessage('There was an error casting your vote.');
//       console.error('There was an error casting your vote!', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
//         {candidate ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate ID:
//               </label>
//               <input
//                 type="text"
//                 value={candidate._id}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate Name:
//               </label>
//               <input
//                 type="text"
//                 value={candidate.fullname}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Enter Your Vote:
//               </label>
//               <input
//                 type="number"
//                 value={voteValue}
//                 onChange={handleVoteChange}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 placeholder="Enter vote value"
//                 required
//                 disabled={voteCasted}
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
//               disabled={voteCasted}
//             >
//               Cast Vote
//             </button>
//           </form>
//         ) : (
//           <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
//         )}
//         {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default CastVote;

//testing 
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function CastVote() {
//   const { id } = useParams(); // Get candidate ID from URL
//   const [candidate, setCandidate] = useState(null); // State for candidate data
//   const [voteValue, setVoteValue] = useState(''); // State for vote value
//   const [message, setMessage] = useState('');
//   const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast

//   useEffect(() => {
//     // Fetch candidate data when component mounts
//     const fetchCandidate = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/candidates/${id}`);
//         setCandidate(response.data);
//       } catch (error) {
//         console.error('Error fetching candidate data:', error);
//         setMessage('Error fetching candidate data.');
//       }
//     };

//     fetchCandidate();
//   }, [id]);

//   const handleVoteChange = (event) => {
//     const value = event.target.value;
//     // Allow only the number '1'
//     if (value === '1' || value === '') {
//       setVoteValue(value);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (voteValue !== '1') {
//       setMessage('Please enter the vote value as 1.');
//       return;
//     }
//     try {
//       // Post vote value to the server
//       const response = await axios.post('http://localhost:3001/cast-vote', {
//         candidateId: id,
//         voteValue
//       });
//       setMessage('Vote cast successfully!');
//       setVoteCasted(true); // Disable the button
//       console.log('Vote cast:', response.data);
//     } catch (error) {
//       setMessage('There was an error casting your vote.');
//       console.error('There was an error casting your vote!', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
//         {candidate ? (
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate ID:
//               </label>
//               <input
//                 type="text"
//                 value={candidate._id}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate Name:
//               </label>
//               <input
//                 type="text"
//                 value={candidate.fullname}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Enter Your Vote:
//               </label>
//               <input
//                 type="number"
//                 value={voteValue}
//                 onChange={handleVoteChange}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 placeholder="Enter your vote"
//                 required
//                 disabled={voteCasted} // Disable if vote is cast
//                 min="1"
//                 max="1"
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
//               disabled={voteCasted}
//             >
//               Cast Vote
//             </button>
//           </form>
//         ) : (
//           <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
//         )}
//         {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default CastVote;

//more testing
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';

// function CastVote() {
//   const { id } = useParams(); // Get candidate ID from URL
//   const [candidate, setCandidate] = useState(null); // State for candidate data
//   const [voteValue, setVoteValue] = useState(''); // State for vote value
//   const [message, setMessage] = useState('');
//   const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast
//   const navigate = useNavigate(); // Hook to handle navigation

//   useEffect(() => {
//     // Fetch candidate data when component mounts
//     const fetchCandidate = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/candidates/${id}`);
//         setCandidate(response.data);
//       } catch (error) {
//         console.error('Error fetching candidate data:', error);
//         setMessage('Error fetching candidate data.');
//       }
//     };

//     fetchCandidate();
//   }, [id]);

//   const handleVoteChange = (event) => {
//     const value = event.target.value;
//     // Allow only the number '1'
//     if (value === '1' || value === '') {
//       setVoteValue(value);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (voteValue !== '1') {
//       setMessage('Please enter the vote value as 1.');
//       return;
//     }
//     try {
//       // Post vote value to the server
//       const response = await axios.post('http://localhost:3001/cast-vote', {
//         candidateId: id,
//         voteValue
//       });
//       setMessage('Vote cast successfully!');
//       setVoteCasted(true); // Disable the button
//       console.log('Vote cast:', response.data);

//       // Redirect to Results page after 5 seconds
//       setTimeout(() => {
//         navigate('/results');
//       }, 2000);
//     } catch (error) {
//       setMessage('There was an error casting your vote.');
//       console.error('There was an error casting your vote!', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
//         {candidate ? (
//           <form onSubmit={handleSubmit}>
//             {/* <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate ID:
//               </label>
//               <input
//                 type="text"
//                 value={candidate._id}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div> */}
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Candidate Name:
//               </label>
//               <input
//                 type="text"
//                 value={candidate.fullname}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
//                 disabled
//               />
//             </div>
//             <div className="mb-4">
//               <label className="text-xl font-medium text-gray-700 mb-2 block">
//                 Enter Your Vote :
//               </label>
//               <input
//                 type="number"
//                 value={voteValue}
//                 onChange={handleVoteChange}
//                 className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 placeholder="Enter '1' only "
//                 required
//                 disabled={voteCasted}
//                 min="1"
//                 max="1"
//               />
//             </div>
//             <button
//               type="submit"
//               className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
//               disabled={voteCasted}
//             >
//               Cast Vote
//             </button>
//           </form>
//         ) : (
//           <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
//         )}
//         {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default CastVote;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path according to your project structure

function CastVote() {
  const { id } = useParams(); // Get candidate ID from URL
  const [candidate, setCandidate] = useState(null); // State for candidate data
  const [voteValue, setVoteValue] = useState(''); // State for vote value
  const [message, setMessage] = useState('');
  const [voteCasted, setVoteCasted] = useState(false); // State to track if vote is cast
  const navigate = useNavigate(); // Hook to handle navigation

  useEffect(() => {
    // Fetch candidate data when component mounts
    const fetchCandidate = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/candidates/${id}`);
        setCandidate(response.data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
        setMessage('Error fetching candidate data.');
      }
    };

    fetchCandidate();
  }, [id]);

  const handleVoteChange = (event) => {
    const value = event.target.value;
    // Allow only the number '1'
    if (value === '1' || value === '') {
      setVoteValue(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (voteValue !== '1') {
      setMessage('Please enter the vote value as 1.');
      return;
    }
    try {
      // Post vote value to the server
      const response = await axios.post('http://localhost:3001/cast-vote', {
        candidateId: id,
        voteValue
      });
      setMessage('Vote cast successfully!');
      setVoteCasted(true); // Disable the button
      console.log('Vote cast:', response.data);

      // Redirect to Results page after 2 seconds
      setTimeout(() => {
        navigate('/results');
      }, 2000);
    } catch (error) {
      setMessage('There was an error casting your vote.');
      console.error('There was an error casting your vote!', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-6">Cast Your Vote</h2>
          {candidate ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-xl font-medium text-gray-700 mb-2 block">
                  Candidate Name:
                </label>
                <input
                  type="text"
                  value={candidate.fullname}
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="text-xl font-medium text-gray-700 mb-2 block">
                  Enter Your Vote:
                </label>
                <input
                  type="number"
                  value={voteValue}
                  onChange={handleVoteChange}
                  className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  placeholder="Enter '1' only"
                  required
                  disabled={voteCasted}
                  min="1"
                  max="1"
                />
              </div>
              <button
                type="submit"
                className={`bg-blue-500 text-white py-2 px-4 rounded ${voteCasted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                disabled={voteCasted}
              >
                Cast Vote
              </button>
            </form>
          ) : (
            <p className="text-center text-lg text-gray-700">Loading candidate information...</p>
          )}
          {message && <p className="mt-4 text-center text-lg text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default CastVote;
