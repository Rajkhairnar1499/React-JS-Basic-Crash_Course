import { useCustomCounter } from "../hooks/useCustomCounter";

export const LearnCustomHook = () => {
  const { count, handleIncrement } = useCustomCounter();

  return (
    <>
      <h1>Learn Custom Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increase</button>
      <hr />
    </>
  );
};
