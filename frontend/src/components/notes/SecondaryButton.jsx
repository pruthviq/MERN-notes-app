import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SecondaryButton = () => {
  return (
    <Link
      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-300 transition dark:hover:text-white hover:text-black"
      to="/notes"
    >
      <ArrowLeft />
      Back to Notes
    </Link>
  );
};

export default SecondaryButton;
