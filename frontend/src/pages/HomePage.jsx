import { Link } from "react-router-dom";
import ThemeToggle from "../components/UI/ThemeToggle";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/notes">Notes</Link>
      <ThemeToggle />
    </div>
  );
};

export default HomePage;
