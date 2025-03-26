import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { charactersAtom, Character } from "../state/charactersAtom";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const [characters, setCharacters] = useRecoilState(charactersAtom);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCharacter, setEditedCharacter] = useState(character);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCharacter({ ...editedCharacter, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setCharacters(
      characters.map((char) =>
        char.name === character.name ? editedCharacter : char
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card p-3">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={editedCharacter.name}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="text"
              name="height"
              value={editedCharacter.height}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <button className="btn btn-success me-2" onClick={saveChanges}>
              Save
            </button>
            <button className="btn btn-danger" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h5>{character.name}</h5>
            <p>Height: {character.height}</p>
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;