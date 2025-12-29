import { useState } from "react";

const useAlish = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};

export default useAlish;
