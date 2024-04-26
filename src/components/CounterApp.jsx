import { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const handleCounter = () => {
      setCount(count + 1);
      // setCount((prevCount) => prevCount + 1)
    };
    const resetCount = () => {
      setCount(0);
    };

  return (
    <>
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={handleCounter}>Increase Count</button>
        <button onClick={resetCount}>Reset Count</button>
        <hr />
    </>
  )
}

export default CounterApp;