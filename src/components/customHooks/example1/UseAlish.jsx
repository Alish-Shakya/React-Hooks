import { useState, useEffect } from "react";

function useAlish() {
  const [message, setMessage] = useState("Hello from Alish!");

  useEffect(() => {
    console.log("useAlish hook is running");
  }, []);

  return [message, setMessage];
}

export default useAlish;
