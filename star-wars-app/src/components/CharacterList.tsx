import React from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../state/charactersAtom";
import CharacterCard from "./CharacterCard";

const CharacterList: React.FC = () => {
  const characters = useRecoilValue(charactersAtom);

  return (
    <div className="row">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;