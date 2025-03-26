import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { charactersAtom } from "./state/charactersAtom";
import { fetchCharacters } from "./api/swapi";
import CharacterList from "./components/CharacterList";

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
    <div className="container mt-4">
      <h1 className="text-center">Star Wars Characters</h1>
      <CharacterList />
    </div>
  );
};

export default App;
