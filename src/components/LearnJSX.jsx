const LearnJSX = () => {
  let model = "G11234";
  return (
    <>
      {/* React.createElement("h1", "null", "LearnJSX 1") */}
      <h1>LearnJSX</h1>
      <h2>LearnJSX 1</h2>
      {/* React.createElement("h1", "null", "LearnJSX 2") */}
      <h2>LearnJSX 2</h2>

      {/* JavaScript Expression in JSX */}
      <h2>Price: {10 + 20}</h2>
      <h2>LG {model}</h2>

      {/* Attribute in JSX */}
      <h2 className="bg-primary">LearnJSX 3</h2>
      <h2 className={model}>LearnJSX 4</h2>
      <hr />
    </>
  );
}

export default LearnJSX
