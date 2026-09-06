import React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-premium disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-[#ff8f2b] hover:-translate-y-0.5",
  secondary: "bg-ink text-paper hover:bg-brand hover:-translate-y-0.5",
  ghost:
    "border border-current/30 text-current hover:bg-current/10 hover:-translate-y-0.5",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: string;
  href?: string;
}

const Button: React.FC<Props> = ({
  variant = "primary",
  to,
  href,
  className = "",
  children,
  ...rest
}) => {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;
