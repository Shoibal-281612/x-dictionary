import React, { useState } from "react";

function XDictionary() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const trimmed = searchTerm.trim();

    // ✅ If input is empty, immediately show "Word not found..."
    if (trimmed === "") {
      setResult("Word not found in the dictionary.");
      return;
    }

    // Case-insensitive match
    const found = dictionary.find(
      (entry) => entry.word.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter word to search"
      />
      <button onClick={handleSearch}>Search</button>
<h3>Definition:</h3>
      {/* ✅ Show Definition label only when we have a result */}
      {result && (
        <div>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default XDictionary;
