import { LucideArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="flex items-center gap-1 cursor-pointer rounded-2xl border-2 py-1 px-3 dark:border-zinc-100 border-zinc-900"
      onClick={() => navigate(-1)}
    >
      <LucideArrowLeft size={18} /> Go Back
    </button>
  );
};

export default BackButton;
