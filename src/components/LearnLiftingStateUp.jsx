const LearnLiftingStateUp = ({ myClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let data = "I m Child Data";
    myClick(data);
  };

  return (
    <>
      <h1>Lifting State Up</h1>
      <button onClick={handleClick}>Click 1</button>
      <hr />
    </>
  );
};

export default LearnLiftingStateUp;
