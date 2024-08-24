import React, { useState } from "react";
import "./App.css";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";

function App() {
  const [selectedParts, setSelectedParts] = useState({
    body: 1,
    layer_1: 1,
    layer_2: 1,
    layer_3: 1,
    mouths: 1,
    eyes: 1,
    eyebrows: 1,
    glasses: 1,
    hats: 1,
    hair: 1,
  });

  const handleSelect = (part, index) => {
    setSelectedParts((prevState) => ({
      ...prevState,
      [part]: index,
    }));
  };

  const randomizeParts = () => {
    const randomParts = {
      body: Math.floor(Math.random() * 5) + 1,
      layer_1: Math.floor(Math.random() * 5) + 1,
      layer_2: Math.floor(Math.random() * 5) + 1,
      layer_3: Math.floor(Math.random() * 5) + 1,
      mouths: Math.floor(Math.random() * 5) + 1,
      eyes: Math.floor(Math.random() * 5) + 1,
      eyebrows: Math.floor(Math.random() * 5) + 1,
      glasses: Math.floor(Math.random() * 5) + 1,
      hats: Math.floor(Math.random() * 5) + 1,
      hair: Math.floor(Math.random() * 5) + 1,
    };

    setSelectedParts(randomParts);
  };

  return (
    <div className="App">
      <PartList onSelect={handleSelect} />
      <Avatar selectedParts={selectedParts} randomizeParts={randomizeParts} />
    </div>
  );
}

export default App;
