// VotingHistory.jsx
import React from 'react';
import Navbar from './Navbar'; // Adjust the import path if necessary

const votingData = [
  {
    date: "July 10, 2024",
    title: "Student Council Elections",
    results: "Ali won with 55% of the votes",
  },
  {
    date: "June 15, 2024",
    title: "Society President Elections",
    results: "Abdullah Smith won with 65% of the votes",
  },
  {
    date: "May 22, 2024",
    title: "Society Vice President Elections",
    results: "Ahmad Davis won with 72% of the votes",
  },
  {
    date: "April 30, 2024",
    title: "Society Executive Elections",
    results: "Kiran Brown won with 58% of the votes",
  },
  {
    date: "March 18, 2024",
    title: "Vice President Vote",
    results: "Sarah Wilson won with 60% of the votes",
  },
];

function VotingHistory() {
  return (
    <div>
      <Navbar />
      <div className="pt-16  w-3/4 m-auto mt-10 bg-gray-200 p-6 rounded-lg"> {/* Added background and padding */}
        <h1 className="text-3xl font-bold mb-6 text-center">Voting History</h1>
        <div className="space-y-4">
          {votingData.map((vote, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h1 className="text-3xl font-semibold mb-2 text-blue-900 ">{vote.title}</h1>
              <p className="text-gray-600 mb-2">{vote.date}</p>
              <p className="font-semibold text-xl">{vote.results}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VotingHistory;
