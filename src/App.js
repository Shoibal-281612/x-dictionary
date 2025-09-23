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
  const [definition, setDefinition] = useState(""); 


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
      setDefinition(found.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
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
      {definition !== "" && (
        <div>
          {/* If result is exactly the meaning (i.e. found), show Definition: */}
          {definition === "Word not found in the dictionary." ? (
            <p>{definition}</p>
          ) : (
            <>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default XDictionary;
