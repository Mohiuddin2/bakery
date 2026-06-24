import { cn } from "@/lib/utils";

export type IconName =
  | "wheat"
  | "bread"
  | "cake"
  | "cookie"
  | "croissant"
  | "cup"
  | "cart"
  | "heart"
  | "truck"
  | "gift"
  | "store"
  | "leaf"
  | "clock"
  | "award"
  | "phone"
  | "mail"
  | "pin"
  | "star"
  | "arrow-right"
  | "menu"
  | "close"
  | "quote"
  | "plus"
  | "minus"
  | "play"
  | "check"
  | "calendar"
  | "instagram"
  | "facebook"
  | "x"
  | "youtube";

// Stroke-based glyphs (drawn with currentColor outline).
const stroke: Partial<Record<IconName, React.ReactNode>> = {
  wheat: (
    <>
      <path d="M12 22V9" />
      <path d="M12 9c0-2.2 1.6-3.5 3.4-3.5C15.4 7.7 13.8 9 12 9Z" />
      <path d="M12 9c0-2.2-1.6-3.5-3.4-3.5C8.6 7.7 10.2 9 12 9Z" />
      <path d="M12 14c0-2.2 1.6-3.5 3.4-3.5C15.4 12.7 13.8 14 12 14Z" />
      <path d="M12 14c0-2.2-1.6-3.5-3.4-3.5C8.6 12.7 10.2 14 12 14Z" />
      <path d="M12 19c0-2.2 1.6-3.5 3.4-3.5C15.4 17.7 13.8 19 12 19Z" />
      <path d="M12 19c0-2.2-1.6-3.5-3.4-3.5C8.6 17.7 10.2 19 12 19Z" />
    </>
  ),
  bread: (
    <>
      <path d="M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M9.5 9v9" />
      <path d="M14 9v9" />
    </>
  ),
  cake: (
    <>
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.7-1 2-1 2.4 2 4 2 2.7-2 4-2 2.4 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M12 4v3" />
      <path d="M7 5v2" />
      <path d="M17 5v2" />
    </>
  ),
  cookie: (
    <>
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
      <path d="M8.5 8.5h.01" />
      <path d="M16 15.5h.01" />
      <path d="M12 12h.01" />
      <path d="M11 17h.01" />
      <path d="M7 14h.01" />
    </>
  ),
  croissant: (
    <>
      <path d="M11 4.5c2 0 4.5.5 6.5 2.5 1.5 1.5 2.5 4 2.5 6.5" />
      <path d="M5 9c2.5-2.5 5-3 6-3" />
      <path d="M4.5 12.5 8 9l7 7-3.5 3.5a2 2 0 0 1-2.8 0l-4.2-4.2a2 2 0 0 1 0-2.8Z" />
      <path d="M15 16c2.5 0 4-.5 5-1.5" />
    </>
  ),
  cup: (
    <>
      <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <path d="M6 2v2" />
      <path d="M10 2v2" />
      <path d="M14 2v2" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.5 11.6a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.95-1.55L21.5 7H6" />
    </>
  ),
  heart: (
    <path d="M19 14c1.5-1.46 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z" />
  ),
  truck: (
    <>
      <path d="M14 18V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h1" />
      <path d="M14 9h4l3 3.5V17a1 1 0 0 1-1 1h-1" />
      <path d="M9 18h5" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </>
  ),
  gift: (
    <>
      <path d="M20 12v9H4v-9" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
    </>
  ),
  store: (
    <>
      <path d="M4 7l1.5-4h13L20 7" />
      <path d="M3.5 7h17v2a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0z" />
      <path d="M5 11v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M9 21v-5h6v5" />
    </>
  ),
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
  plus: <path d="M5 12h14M12 5v14" />,
  minus: <path d="M5 12h14" />,
  check: <path d="M20 6 9 17l-5-5" />,
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
};

// Filled glyphs (drawn as solid currentColor shapes).
const filled: Partial<Record<IconName, React.ReactNode>> = {
  star: (
    <path d="M11.48 3.5a.56.56 0 0 1 1.04 0l2.12 5.11a.56.56 0 0 0 .48.35l5.52.44c.5.04.7.66.32.99l-4.2 3.6a.56.56 0 0 0-.18.56l1.28 5.38a.56.56 0 0 1-.84.61l-4.72-2.88a.56.56 0 0 0-.59 0l-4.72 2.88a.56.56 0 0 1-.84-.61l1.28-5.38a.56.56 0 0 0-.18-.56l-4.2-3.6a.56.56 0 0 1 .32-.99l5.52-.44a.56.56 0 0 0 .48-.35Z" />
  ),
  quote: (
    <>
      <path d="M9.5 4C6 4 3 7 3 10.5V20h7v-9H6.5C6.5 8 8 6.5 10 6.5L9.5 4Z" />
      <path d="M20.5 4C17 4 14 7 14 10.5V20h7v-9h-3.5C17.5 8 19 6.5 21 6.5L20.5 4Z" />
    </>
  ),
  play: <path d="m6 3 14 9-14 9V3Z" />,
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
  ),
  x: (
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
  ),
  youtube: (
    <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
  ),
};

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const isFilled = name in filled;
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-6 w-6", className)}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isFilled ? filled[name] : stroke[name]}
    </svg>
  );
}
