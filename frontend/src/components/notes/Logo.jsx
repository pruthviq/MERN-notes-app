import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="font-mono text-xl font-bold tracking-tight text-emerald-400 sm:text-2xl">
        ThinkBoard
      </h1>
    </Link>
  );
};

export default Logo;
