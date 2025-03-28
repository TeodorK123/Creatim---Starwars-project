import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { charactersAtom } from "./state/charactersAtom";
import { fetchCharacters } from "./api/swapi";
import CharacterList from "./components/CharacterList";
import './App.css';

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
      <h1 className="text-center">Star Wars Characters</h1>
      <div className="character-list-container">
        <CharacterList />
      </div>
    </div>
  );
};

export default App;
