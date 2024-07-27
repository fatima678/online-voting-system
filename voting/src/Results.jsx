// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';

// // // function Results() {
// // //   const [votes, setVotes] = useState([]);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     axios.get('http://localhost:3001/votes')
// // //       .then(response => {
// // //         setVotes(response.data);
// // //       })
// // //       .catch(error => {
// // //         setError('Error fetching votes data');
// // //         console.error('There was an error fetching votes!', error);
// // //       });
// // //   }, []);

// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
// // //       <h1 className="text-4xl font-bold mb-6">Voting Results</h1>
// // //       {error && <p className="text-red-500 mb-4">{error}</p>}
// // //       <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
// // //         <table className="min-w-full bg-white">
// // //           <thead>
// // //             <tr>
// // //               <th className="py-2 px-4 border-b">Candidate ID</th>
// // //               <th className="py-2 px-4 border-b">Vote Value</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {votes.map((vote, index) => (
// // //               <tr key={index}>
// // //                 <td className="py-2 px-4 border-b">{vote.candidateId}</td>
// // //                 <td className="py-2 px-4 border-b">{vote.voteValue}</td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Results;


// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function Results() {
// //   const [results, setResults] = useState([]);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     axios.get('http://localhost:3001/results')
// //       .then(response => {
// //         setResults(response.data);
// //       })
// //       .catch(error => {
// //         setError('Error fetching results data');
// //         console.error('There was an error fetching results!', error);
// //       });
// //   }, []);

// //   return (
// //     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
// //       <h1 className="text-4xl font-bold mb-6">Voting Results</h1>
// //       {error && <p className="text-red-500 mb-4">{error}</p>}
// //       <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
// //         <table className="min-w-full bg-white">
// //           <thead>
// //             <tr>
// //               <th className="py-2 px-4 border-b">Candidate Name</th>
// //               <th className="py-2 px-4 border-b">Total Votes</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {results.map((result, index) => (
// //               <tr key={index}>
// //                 <td className="py-2 px-4 border-b">{result.candidateName}</td>
// //                 <td className="py-2 px-4 border-b">{result.totalVotes}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Results;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Results() {
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:3001/results')
//       .then(response => {
//         setResults(response.data);
//       })
//       .catch(error => {
//         setError('Error fetching results data');
//         console.error('There was an error fetching results!', error);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold mb-6">Voting Results</h1>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-b">Candidate Name</th>
//               <th className="py-2 px-4 border-b">Total Votes</th>
//             </tr>
//           </thead>
//           <tbody>
//             {results.map((result, index) => (
//               <tr key={index}>
//                 <td className="py-2 px-4 border-b">{result.candidateName}</td>
//                 <td className="py-2 px-4 border-b">{result.totalVotes}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Results;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Adjust the path according to your project structure

function Results() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/results')
      .then(response => {
        // Sorting by totalVotes and then by candidateName for tie-breaking
        const sortedResults = response.data.sort((a, b) => {
          if (b.totalVotes === a.totalVotes) {
            return a.candidateName.localeCompare(b.candidateName);
          }
          return b.totalVotes - a.totalVotes;
        });
        setResults(sortedResults);
      })
      .catch(error => {
        setError('Error fetching results data');
        console.error('There was an error fetching results!', error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8 mt-20"> {/* Adjust the margin as needed */}
        <h1 className="text-4xl font-bold mb-6">Voting Results</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Rank</th>
                <th className="py-2 px-4 border-b">Candidate Name</th>
                <th className="py-2 px-4 border-b">Total Votes</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <React.Fragment key={index}>
                  {index === 0 && (
                    <tr>
                      <td colSpan="3" className="py-2 px-4 border-b text-xl font-bold text-green-600">Winner</td>
                    </tr>
                  )}
                  {index === 1 && (
                    <tr>
                      <td colSpan="3" className="py-2 px-4 border-b text-xl font-bold text-orange-600">Second Place</td>
                    </tr>
                  )}
                  {index === 2 && (
                    <tr>
                      <td colSpan="3" className="py-2 px-4 border-b text-xl font-bold text-yellow-600">Third Place</td>
                    </tr>
                  )}
                  <tr>
                    <td className="py-2 px-4 border-b">{index + 1}</td>
                    <td className="py-2 px-4 border-b">{result.candidateName}</td>
                    <td className="py-2 px-4 border-b">{result.totalVotes}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;
