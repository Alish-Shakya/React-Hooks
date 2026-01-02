import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const double = useMemo(() => {
    console.log("Calculating ....");
    return count * 2;
  }, [count]); // only runs when count changes

  return (
    <div>
      <p>Double: {double}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <br />
      <br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};

export default UseMemo;
