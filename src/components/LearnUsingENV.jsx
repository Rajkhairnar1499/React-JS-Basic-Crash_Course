export const LearnUsingENV = () => {
  return (
    <>
      <h1>Learn Using ENV</h1>
      <h2>How to use env in React + Vite</h2>
      {import.meta.env.VITE_BASE_API_URL}
      <br />
      {import.meta.env.VITE_API_KEY}
    </>
  );
};
