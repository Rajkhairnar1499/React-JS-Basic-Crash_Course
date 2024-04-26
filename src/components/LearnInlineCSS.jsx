export const LearnInlineCSS = () => {
    const btnStyle = {
        colo: "blue",
        backgroundColor: "orange"
    }

    return (
      <>
        <h1>LearnInlineCSS</h1>
        <p style={{ fontSize: "20px", color: "red" }}>
          Hello React + Vite + GeekyShows
        </p>
        <button style={btnStyle}>Button 1</button>
        <button style={{ ...btnStyle, ...{ fontSize: "20px" } }}>
          Button 2
        </button>
        <hr />
      </>
    );
}