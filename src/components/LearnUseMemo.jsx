import { useMemo, useState } from "react";

export const LearnUseMemo = () => {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => {
    console.log("Increase Count Function");
    setCount(count + 1);
  };

  const [randomNumber, setRandomNumber] = useState(null);
  const generateRandomNumber = () => {
    console.log("Generate Random Number Function");
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
  };


  // Using the Custom Function
    // const isCountTen = () => {
    //   console.log("isCountTen Called");
    //   if (count === 10) {
    //       return "Yes";
    //   }
    //   return "No";
    // }

  // Using the useMemo hook
  // In React, useMemo is a hook that lets you remember the result of a calculation B/W re-renders. It's like a small cache for your component.
  const isCountTen = useMemo(() => {
    console.log("isCountTen Called");
    if (count === 10) {
      return "Yes";
    }
    return "No";
  }, [count]);

  return (
    <>
      <h1>LearnUseMemo</h1>
      <h2>
        is {count} equal to 10 ? --- {isCountTen}
      </h2>
      <button onClick={handleIncreaseCount}>Increase Count</button>
      <h2>Random Number: {randomNumber}</h2>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <hr />
    </>
  );
};
