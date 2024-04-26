// Memo is a higher-order component (HOC) that memoizes the rendering of a function component.
// It prevents a functional component from re-rendering if its props haven't changed
// It's particularly useful when you have components that are rendering with the sam props, but don't need to update when those props change.

import { memo } from "react";

// eslint-disable-next-line react/display-name
export const GenerateRandomNumber = memo(
  ({ randomNumber, generateRandomNumber }) => {
    console.log("Generate Random Number Component Rendered");
    return (
      <>
        <h2>Random Number: {randomNumber}</h2>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
      </>
    );
  }
);