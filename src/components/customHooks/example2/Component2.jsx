import React from "react";
import useAlish from "./useAlish";

const Component2 = () => {
  const { count, decrement } = useAlish();

  return (
    <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
      <h2>Component 2</h2>
      <p>Count: {count}</p>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Component2;
