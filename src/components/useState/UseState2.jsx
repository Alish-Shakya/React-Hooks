import React, { useState } from "react";

const UseState2 = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show === true && <img src="/vite.svg" alt="image"></img>}

      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>

      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState2;
