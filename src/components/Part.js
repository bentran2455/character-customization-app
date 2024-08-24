import React from "react";

function Part({ part, index }) {
  return (
    <>
      <img
        src={`character/${part}/${index}.png`}
        alt="Avatar"
        width="30"
        height="60"
        // style={{ zIndex: 0, position: "absolute", left: 0, top: 0 }}
      />
    </>
  );
}

export default Part;
