import React, { useState } from "react";

function SearchBar({ trie, onSkillSelect }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Search for auto-completions using the Trie
    if (trie && value.trim()) {
      setSuggestions(trie.search(value.trim()));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    onSkillSelect(suggestion); // Add selected skill
    setInput(""); // Clear input after selection
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="Enter a skill (e.g., JavaScript)"
        value={input}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
      {suggestions.length > 0 && (
        <ul className="border rounded-lg mt-2 p-2 bg-white shadow-md">
          {suggestions.map((suggestion, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-1 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
