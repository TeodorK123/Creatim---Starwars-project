// IMPORTS

import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { charactersAtom } from "./state/charactersAtom";
import { fetchCharacters } from "./api/swapi";
import CharacterList from "./components/CharacterList";
import Navbar from "./components/Navbar";  // Import Navbar
import './App.css';


// Definition of the App component
// This components contains the character list and the navbar components

const App: React.FC = () => {
  const [, setCharacters] = useRecoilState(charactersAtom);

  useEffect(() => {
    async function loadCharacters() {
      const data = await fetchCharacters();
      setCharacters(data);
    }
    loadCharacters();
  }, [setCharacters]);

  return (
    <div className="App">
      {/* Use Navbar Component */}
      <Navbar />
      
      <div className="character-list-container">
        <CharacterList />
      </div>
    </div>
  );
};

export default App;
