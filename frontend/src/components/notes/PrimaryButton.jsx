import { Link } from "react-router-dom";

const base =
  "cursor-pointer inline-flex items-center gap-2 rounded-full bg-emerald-500 px-2 py-2 text-sm font-semibold text-emerald-950 shadow-sm transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-emerald-500";

const PrimaryButton = ({
  to,
  className = "",
  onClick,
  children,
  type = "button",
  disabled,
  ...props
}) => {
  const classes = `${base} ${className}`.trim();

  if (to) {
    return (
      <Link
        className={classes}
        type={type}
        onClick={onClick}
        disabled={disabled}
        to={to}
        {...props}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
