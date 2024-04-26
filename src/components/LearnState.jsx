import React, { useState } from "react";

const LearnState = () => {
  const [num, setNum] = useState(5);
  console.log("Number, ", num);
  const handleNum = () => {
    setNum(10);
  };

  const [position, setPosition] = useState({ x: 1, y: 2 });
  console.log("Position", position);
  const handlePosition = () => {
    setPosition({ x: 4, y: 6 });
  };

  return (
    <>
      <h1>Learn useState</h1>
      <h2>Number {num}</h2>
      <button onClick={handleNum}>Change Number</button>
      <h2>
        Position: {position.x} {position.y}
      </h2>
      <button onClick={handlePosition}>Change Position</button>
      <hr />
    </>
  );
};

export default LearnState;
