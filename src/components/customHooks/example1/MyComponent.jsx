import React from "react";
import useAlish from "./UseAlish";

const MyComponent = () => {
  const [message, setMessage] = useAlish();

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Updated!")}>Update</button>
    </div>
  );
};

export default MyComponent;
