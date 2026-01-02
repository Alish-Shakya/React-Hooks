import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import Content from "./Content";

const Dashboard = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
};

export default Dashboard;
