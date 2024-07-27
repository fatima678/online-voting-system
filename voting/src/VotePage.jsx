// src/VotePage.js
import React from 'react';

function VotePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-slate-800">Vote Your Desired Personality</h2>
        <button
          onClick={() => alert('Vote Cast!')}
          className="bg-slate-700 text-white py-2 px-4 rounded hover:bg-slate-600"
        >
          Cast Your Vote
        </button>
      </div>
    </div>
  );
}

export default VotePage;
