import { Plus } from "lucide-react";

import PrimaryButton from "../notes/PrimaryButton";
import Logo from "./Logo";
import ThemeToggle from "../ui/ThemeToggle";

const Header = () => {
  return (
    <header className="border-b dark:border-zinc-600 dark:bg-zinc-900 bg-zinc-200">
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Logo />
        <ThemeToggle />
        <PrimaryButton to="/notes/create" icon={<Plus />}>
          Create Note
        </PrimaryButton>
      </div>
    </header>
  );
};

export default Header;
