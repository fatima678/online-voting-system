// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import Navbar from './Navbar'; 

// // function CandidateList() {
// //   const [candidates, setCandidates] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3001/candidates')
// //       .then(response => {
// //         setCandidates(response.data);
// //       })
// //       .catch(error => {
// //         console.error("There was an error fetching the candidates!", error);
// //       });
// //   }, []);

// //   return (
// //     <div>
// //       <Navbar /> {/* Adding Navbar component */}
// //       <div className="min-h-screen bg-gray-100 p-4 pt-24"> {/* Added pt-24 to create space for the Navbar */}
// //         <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Registered Candidates for Election</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {candidates.map((candidate, index) => (
// //             <div
// //               key={index}
// //               className="bg-white shadow-lg rounded-lg p-6 min-h-[250px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl" // Added transition-shadow and hover:shadow-2xl
// //             >
// //               <div>
// //                 <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center">{candidate.fullname}</h3>
// //                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Department:</strong> {candidate.department}</p>
// //                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Semester:</strong> {candidate.semester}</p>
// //                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Society:</strong> {candidate.society}</p>
// //                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Position:</strong> {candidate.position}</p>
// //               </div>
// //               <div>
// //                 <p className="text-gray-800"><strong>Symbol:</strong> {candidate.symbol}</p>
// //               </div>
// //               <button
// //                 className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
// //               >
// //                 Choose Your Candidate
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CandidateList;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Updated import
// import Navbar from './Navbar';

// function CandidateList() {
//   const [candidates, setCandidates] = useState([]);
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   useEffect(() => {
//     axios.get('http://localhost:3001/candidates')
//       .then(response => {
//         setCandidates(response.data);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the candidates!", error);
//       });
//   }, []);

//   const handleVoteClick = () => {
//     navigate('/cast-vote'); // Use navigate to change route
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-100 p-4 pt-24">
//         <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Registered Candidates for Election</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {candidates.map((candidate, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg p-6 min-h-[250px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl"
//             >
//               <div>
//                 <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center">{candidate.fullname}</h3>
//                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Department:</strong> {candidate.department}</p>
//                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Semester:</strong> {candidate.semester}</p>
//                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Society:</strong> {candidate.society}</p>
//                 <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Position:</strong> {candidate.position}</p>
//               </div>
//               <div>
//                 <p className="text-gray-800"><strong>Symbol:</strong> {candidate.symbol}</p>
//               </div>
//               <button
//                 onClick={handleVoteClick}
//                 className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
//               >
//                 Choose Your Candidate
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CandidateList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/candidates')
      .then(response => {
        setCandidates(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the candidates!", error);
      });
  }, []);

  const handleVoteClick = (id) => {
    navigate(`/cast-vote/${id}`); // Navigate with candidate ID
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-4 pt-24">
        <h2 className="text-3xl text-slate-800 mb-6 font-bold text-center">Registered Candidates for Election</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <div
              key={candidate._id} // Use candidate._id as key
              className="bg-white shadow-lg rounded-lg p-6 min-h-[250px] flex flex-col justify-between transition-shadow duration-300 hover:shadow-2xl"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900 text-center">{candidate.fullname}</h3>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Department:</strong> {candidate.department}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Semester:</strong> {candidate.semester}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Society:</strong> {candidate.society}</p>
                <p className="text-gray-800 border-b border-gray-300 pb-2 mb-2"><strong>Position:</strong> {candidate.position}</p>
              </div>
              <div>
                <p className="text-gray-800"><strong>Symbol:</strong> {candidate.symbol}</p>
              </div>
              <button
                onClick={() => handleVoteClick(candidate._id)} // Pass candidate ID
                className="mt-4 bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
              >
                Choose Your Candidate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CandidateList;
