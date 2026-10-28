import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.theme ?? "system");

  (useEffect(() => {
    // updates ls
    theme === "system"
      ? localStorage.removeItem("theme")
      : (localStorage.theme = theme);

    // updates theme
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (theme === "system" &&
          matchMedia("(prefers-color-scheme: dark)").matches),
    );
  }),
    [theme]);

  return (
    <select
      className="dark:bg-zinc-950"
      name="Theme"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
};

export default ThemeToggle;
