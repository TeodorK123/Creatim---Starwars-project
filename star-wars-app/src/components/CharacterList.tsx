import React, { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../state/charactersAtom";
import CharacterCard from "./CharacterCard";
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterList: React.FC = () => {
  const characters = useRecoilValue(charactersAtom);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isEditing, setIsEditing] = useState(false); // Track editing state

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isEditing || !listRef.current) return; // Disable drag if editing
    const startX = e.clientX;
    const scrollLeft = listRef.current.scrollLeft;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const moveX = moveEvent.clientX;
      listRef.current!.scrollLeft = scrollLeft - (moveX - startX);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  // Handle mouse wheel scrolling horizontally
  const handleWheel = (e: React.WheelEvent) => {
    if (isEditing || !listRef.current) return; // Disable wheel scroll if editing
    listRef.current.scrollLeft += e.deltaY; // Scroll horizontally using wheel
    e.preventDefault(); // Prevent default vertical scroll behavior
  };

  return (
    <div
      className="character-list-container d-flex justify-content-center"
      style={{
        width: "100%",
        padding: "20px 0",
      }}
    >
      <div
        ref={listRef}
        className="character-list d-flex gap-3"
        style={{
          margin: "12%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          maxWidth: "90%",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          boxShadow: "inset -10px 0px 10px -10px rgba(0,0,0,0.2)",
        }}
        onMouseDown={handleMouseDown}
        onWheel={handleWheel}
      >
        {characters.map((character, index) => (
          <div key={index} style={{ flex: "0 0 auto" }}>
            <CharacterCard
              character={character}
              setIsEditing={setIsEditing} // Pass the editing state setter
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;