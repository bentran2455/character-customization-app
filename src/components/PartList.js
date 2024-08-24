import React from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
};

const totalValue = Object.entries(total);

function PartList({ onSelect }) {
  return (
    <div id="list-container">
      {totalValue.map(([part, count]) => (
        <div key={part} className="list">
          <h1>
            {part === "layer_1"
              ? "Clothing 1"
              : part === "layer_2"
              ? "Clothing 2"
              : part === "layer_3"
              ? "Clothing 3"
              : part.charAt(0).toUpperCase() + part.slice(1)}
          </h1>
          <p>{count} options</p>
          <div className="images">
            {Array.from({ length: count }).map((_, index) => {
              let folderPath;
              if (part === "hats" || part === "glasses") {
                folderPath = `accessories/${part}`;
              } else if (part.startsWith("layer_")) {
                folderPath = `clothes/${part}`;
              } else {
                folderPath = part;
              }
              return (
                <img
                  key={index}
                  src={`character/${folderPath}/${index + 1}.png`}
                  alt={`${part} ${index + 1}`}
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  onClick={() => onSelect(part, index + 1)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PartList;
