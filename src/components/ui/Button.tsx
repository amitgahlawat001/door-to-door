import React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 ease-premium active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

// `border-current/30` and `bg-current/10` are not valid Tailwind — the opacity
// modifier only applies to palette colours, so ghost buttons silently rendered
// with the default gray border and no hover state. Ghost only ever sits on the
// dark surfaces, so it uses explicit white alphas.
const variants: Record<Variant, string> = {
  primary: "bg-accent text-ink hover:bg-[#ff8f2b] hover:-translate-y-0.5",
  secondary: "bg-ink text-paper hover:bg-brand hover:-translate-y-0.5",
  ghost:
    "border border-white/25 text-paper hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  to?: string;
  href?: string;
  /** Swaps the label for a spinner and blocks input. */
  loading?: boolean;
}

const Spinner = () => (
  <svg viewBox="0 0 20 20" className="h-4 w-4 animate-spin" aria-hidden="true">
    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
    <path d="M18 10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const Button: React.FC<Props> = ({
  variant = "primary",
  to,
  href,
  loading,
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
    <button {...rest} className={cls} disabled={loading || rest.disabled}>
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
