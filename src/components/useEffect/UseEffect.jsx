import React, { useEffect } from "react";

const UseEffect = () => {
  console.log("a");

  useEffect(() => {
    console.log("i am useEffect");
    console.log("b");
  });
  console.log("c");

  return <div>UseEffect</div>;
};

export default UseEffect;
