import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "10px",
        background: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Content Area</h3>
      <p>The theme affects me too!</p>
    </div>
  );
};

export default Content;
