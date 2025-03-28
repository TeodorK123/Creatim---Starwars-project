import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { charactersAtom, Character } from "../state/charactersAtom";

// Importing the images from the images folder
import beruImage from "../images/beru.png";
import biggsImage from "../images/biggs.png";
import c3poImage from "../images/c3po.png";
import darthImage from "../images/darth.png";
import leiaImage from "../images/leia.png";
import lukeImage from "../images/luke.png";
import obiwanImage from "../images/obiwan.png";
import owenImage from "../images/owen.png";
import r2d2Image from "../images/r2d2.png";
import r5d4Image from "../images/r5d4.png";

// Map each character name to the corresponding image
const characterImages: { [key: string]: string } = {
  "Beru Whitesun lars": beruImage,
  "Biggs Darklighter": biggsImage,
  "C-3PO": c3poImage,
  "Darth Vader": darthImage,
  "Leia Organa": leiaImage,
  "Luke Skywalker": lukeImage,
  "Obi-Wan Kenobi": obiwanImage,
  "Owen Lars": owenImage,
  "R2-D2": r2d2Image,
  "R5-D4": r5d4Image,
};

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

  // Get the background image based on the character's name, or use a default if not found
  const characterImage = characterImages[character.name] || "";

  return (
    <div
      className="col-md-4 mb-3"
      style={{
        backgroundImage: `url(${characterImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
        width: "280px",
        height: "600px",
        position: "relative",
      }}
    >
      {/* Add a padding at the bottom of the card */}
      <div
        className="card p-3 text-light"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "8px",
          paddingBottom: "20px", // Reduced to make sure it doesn't take too much space
          position: "absolute",
          bottom: "10px", // Keep it at the bottom
          left: "10px", // Optional, add margin if you want space from the edges
          right: "10px", // Optional, add margin if you want space from the edges
          display: "flex",
          flexDirection: "column",

          overflowY: "auto", // Add scroll functionality
          maxHeight: "90%", // Set a maximum height to enable scrolling
        }}
      >
        {isEditing ? (
          <>
            {/* Editable fields for all character properties */}
            <div className="form-group mb-2">
              <label htmlFor="name" style={{ color: "lightgray" }}>
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedCharacter.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="height" style={{ color: "lightgray" }}>
                Height:
              </label>
              <input
                type="text"
                id="height"
                name="height"
                value={editedCharacter.height}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="mass" style={{ color: "lightgray" }}>
                Mass:
              </label>
              <input
                type="text"
                id="mass"
                name="mass"
                value={editedCharacter.mass}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="hair_color" style={{ color: "lightgray" }}>
                Hair Color:
              </label>
              <input
                type="text"
                id="hair_color"
                name="hair_color"
                value={editedCharacter.hair_color}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="skin_color" style={{ color: "lightgray" }}>
                Skin Color:
              </label>
              <input
                type="text"
                id="skin_color"
                name="skin_color"
                value={editedCharacter.skin_color}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="eye_color" style={{ color: "lightgray" }}>
                Eye Color:
              </label>
              <input
                type="text"
                id="eye_color"
                name="eye_color"
                value={editedCharacter.eye_color}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="birth_year" style={{ color: "lightgray" }}>
                Birth Year:
              </label>
              <input
                type="text"
                id="birth_year"
                name="birth_year"
                value={editedCharacter.birth_year}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="gender" style={{ color: "lightgray" }}>
                Gender:
              </label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={editedCharacter.gender}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* Save and Cancel buttons */}
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-success" onClick={saveChanges}>
                Save
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h5 style={{ color: "lightgray", marginBottom: "5px" }}>
              Name: <strong>{character.name}</strong>
            </h5>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Height: <strong>{character.height}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Mass: <strong>{character.mass}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Hair Color: <strong>{character.hair_color}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Skin Color: <strong>{character.skin_color}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Eye Color: <strong>{character.eye_color}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Birth Year: <strong>{character.birth_year}</strong>
            </p>
            <p style={{ color: "lightgray", marginBottom: "5px" }}>
              Gender: <strong>{character.gender}</strong>
            </p>
            <button
              className="btn btn-warning rounded-3"
              style={{
                width: "140px",
                height: "40px",
                boxShadow: "0 0 10px rgba(255, 255, 0, 0.8)",
                alignSelf: "center",
                marginTop: "20px",
              }}
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
