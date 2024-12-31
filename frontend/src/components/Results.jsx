import React from "react";

function Results({ results }) {
  if (!results || results.length === 0) {
    return <p className="text-gray-500 mt-4">No matches found. Try different skills.</p>;
  }

  return (
    <div className="w-full max-w-2xl mt-6">
      <h2 className="text-xl font-semibold text-blue-600">Matched Roles</h2>
      <ul className="mt-4 space-y-4">
        {results.map((result, index) => (
          <li key={index} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-bold">{result.title}</h3>
            <p className="text-sm text-gray-700">
              Relevance: <span className="font-semibold">{result.relevance}%</span>
            </p>
            <p className="mt-2 text-gray-700">{result.comment}</p>
            {result.suggestions && result.suggestions.length > 0 && (
              <div className="mt-2">
                <h4 className="text-sm font-semibold text-gray-800">Suggestions:</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {result.suggestions.map((suggestion, idx) => (
                    <li key={idx}>{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;