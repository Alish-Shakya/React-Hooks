import { useContext } from "react";
import NameContext from "./NameContext";

const GrandChild = () => {
  const name = useContext(NameContext);

  return <h2>Hello {name}</h2>;
};

export default GrandChild;
