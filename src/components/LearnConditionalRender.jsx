import { useState } from "react";


export const LearnConditionalRender = () => {
    const status = true;
    const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <h1>Learn Conditional Rendering</h1>
      {status && <h1>Shubham</h1>}
      {isLogin ? (
        <>
          <h1>Dashboard Page</h1>
          <button onClick={() => setIsLogin(false)}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login Page</h1>
          <button onClick={() => setIsLogin(true)}>Login</button>
        </>
      )}
      <hr />
    </>
  );
}


