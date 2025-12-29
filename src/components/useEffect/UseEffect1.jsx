import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, setCount] = useState(0);

  //   console.log("a");
  useEffect(() => {
    console.log("im useEffect");
    return () => {
      console.log("im clean up function");
    };
  });
  //   console.log("b");

  return (
    <div>
      count is {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseEffect1;
