import React, { useState, useCallback } from "react";

const UseCallback = () => {
  console.log("a");

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("i am useCallback");
    console.log("b");
    setCount((prev) => prev + 1);
  }, []);

  console.log("c");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseCallback;
