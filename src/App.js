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
    if (trimmed === "") {
      // If search term is empty or just whitespace, you might want to clear result
      setResult("");
      return;
    }

    // Case-insensitive search
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

      {/* Only show definition or “not found” after Search pressed */}
      {result !== "" && (
        <div>
          {/* If result is exactly the meaning (i.e. found), show Definition: */}
          {result === "Word not found in the dictionary." ? (
            <p>{result}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{result}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default XDictionary;
