import React from "react";
// Body < Cloding 3 layers < Mouth, nose, eyes < Glasses < Hair
const Avatar = ({ selectedParts, randomizeParts }) => {
  return (
    <div id="avatar-container">
      <div className="avatar">
        <img
          src={`character/body/${selectedParts.body}.png`}
          alt="Body"
          style={{ position: "absolute", zIndex: 0 }}
        />
        <img
          src={`character/clothes/layer_1/${selectedParts.layer_1}.png`}
          alt="Layer 1"
          style={{ position: "absolute", zIndex: 1 }}
        />
        <img
          src={`character/clothes/layer_2/${selectedParts.layer_2}.png`}
          alt="Layer 2"
          style={{ position: "absolute", zIndex: 2 }}
        />
        <img
          src={`character/clothes/layer_3/${selectedParts.layer_3}.png`}
          alt="Layer 3"
          style={{ position: "absolute", zIndex: 3 }}
        />
        <img
          src={`character/mouths/${selectedParts.mouths}.png`}
          alt="Mouth"
          style={{ position: "absolute", zIndex: 4 }}
        />
        <img
          src={`character/eyes/${selectedParts.eyes}.png`}
          alt="Eyes"
          style={{ position: "absolute", zIndex: 4 }}
        />
        <img
          src={`character/eyebrows/${selectedParts.eyebrows}.png`}
          alt="Eyebrows"
          style={{ position: "absolute", zIndex: 4 }}
        />
        <img
          src={`character/accessories/glasses/${selectedParts.glasses}.png`}
          alt="Glasses"
          style={{ position: "absolute", zIndex: 5 }}
        />
        <img
          src={`character/hair/${selectedParts.hair}.png`}
          alt="Hair"
          style={{ position: "absolute", zIndex: 5 }}
        />
        <img
          src={`character/accessories/hats/${selectedParts.hats}.png`}
          alt="hat"
          style={{ position: "absolute", zIndex: 6 }}
        />
        <div className="randomize">
          <button className="random-button" onClick={randomizeParts}>
            Randomize!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
