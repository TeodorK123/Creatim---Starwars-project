import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { charactersAtom } from "../state/charactersAtom";
import CharacterCard from "./CharacterCard";
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterList: React.FC = () => {
  const characters = useRecoilValue(charactersAtom);
  const listRef = useRef<HTMLDivElement | null>(null);

  // Handle mouse drag scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (listRef.current) {
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
    }
  };

  // Handle mouse wheel scrolling horizontally
  const handleWheel = (e: React.WheelEvent) => {
    if (listRef.current) {
      listRef.current.scrollLeft += e.deltaY; // Scroll horizontally using wheel
      e.preventDefault(); // Prevent default vertical scroll behavior
    }
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{
        width: "100%", // Ensure the wrapper spans the full width
        padding: "20px 0", // Optional: adds some vertical padding to space it out
      }}
    >
      <div
        ref={listRef}
        className="d-flex gap-3"
        style={{
          margin: "11.5%", // Optional: adds some padding around the list
          overflowX: "auto", // Horizontal scroll
          whiteSpace: "nowrap", // Prevent wrapping
          scrollBehavior: "smooth", // Smooth scrolling
          maxWidth: "90%", // Optional: limit the width of the list
          scrollbarWidth: "none", // Firefox hide scrollbar
          msOverflowStyle: "none", // Internet Explorer/Edge hide scrollbar
          boxShadow: "inset -10px 0px 10px -10px rgba(0,0,0,0.2)", // Subtle shadow at right edge
        }}
        onMouseDown={handleMouseDown}
        onWheel={handleWheel} // Enable mouse wheel scrolling
      >
        {characters.map((character, index) => (
          <div key={index} style={{ flex: "0 0 auto" }}>
            <CharacterCard character={character} />
          </div>
        ))}
      </div>

      {/* CSS for Webkit Browsers (Chrome, Safari, Edge) */}
      <style>
        {`
          .d-flex[style*="overflowX: auto"]::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
        `}
      </style>
    </div>
  );
};

export default CharacterList;
