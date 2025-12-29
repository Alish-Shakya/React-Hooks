import React from "react";
import useAlish from "./useAlish";

const Component1 = () => {
  const { count, increment } = useAlish();

  return (
    <div style={{ border: "1px solid red", padding: "10px", margin: "10px" }}>
      <h2>Component 1</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Component1;
