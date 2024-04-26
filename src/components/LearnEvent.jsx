const LearnEvent = () => {
  const handleClick1 = (e) => {
    e.preventDefault();
    console.log("Button 1 Clicked");
  };
  const handleClick2 = (myid) => {
    console.log("Button 2 Clicked", myid);
  };

  return (
    <>
      {/* Without Argument  */}
      <h1>Learn Events</h1>
      <h2>Without Argument</h2>
      <button onClick={handleClick1}>Click 1</button>
      {/* With Argument  */}
      <h2>With Argument</h2>
      <button onClick={(e) => handleClick2("EMP231PMO")}>Click 2</button>
      <hr />
    </>
  );
};

export default LearnEvent;
