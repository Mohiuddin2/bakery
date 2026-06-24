import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dark hover:shadow-gold hover:-translate-y-0.5",
  outline:
    "border border-gold/70 text-gold hover:bg-gold hover:text-ink hover:-translate-y-0.5",
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
