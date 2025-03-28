import React from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../state/charactersAtom";
import CharacterCard from "./CharacterCard";
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterList: React.FC = () => {
  const characters = useRecoilValue(charactersAtom);

  return (
    <div
      className="d-flex gap-3 p-3"
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "thin", // For Firefox
        scrollBehavior: "smooth",
      }}
    >
      {characters.map((character, index) => (
        <div key={index} style={{ flex: "0 0 auto" }}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
