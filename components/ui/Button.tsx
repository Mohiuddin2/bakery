import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Golden honey CTA — the primary action everywhere
  primary:
    "bg-yellow text-ink hover:bg-yellow-dark hover:shadow-warm hover:-translate-y-0.5",
  // Fresh green — alternate action on light backgrounds
  secondary:
    "bg-green text-cream hover:bg-green-dark hover:shadow-green hover:-translate-y-0.5",
  // For DARK backgrounds: cream border that fills on hover
  outline:
    "border-2 border-cream/80 text-cream hover:bg-cream hover:text-ink hover:-translate-y-0.5",
  // Solid cream — for DARK backgrounds
  light:
    "bg-cream text-ink hover:bg-white hover:-translate-y-0.5 hover:shadow-card",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
      props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton & { href?: undefined };
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
