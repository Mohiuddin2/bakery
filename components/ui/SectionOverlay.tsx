import { cn } from "@/lib/utils";

interface SectionOverlayProps {
  src: string;
  className?: string;
  /** Pattern tile size in px */
  size?: number;
  /** 0–1 opacity of the pattern layer */
  opacity?: number;
}

/**
 * Repeating background pattern layered over a section's base colour.
 * Uses multiply blend so the white JPEG background reads as transparent.
 */
export function SectionOverlay({
  src,
  className,
  size = 360,
  opacity = 0.28,
}: SectionOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 mix-blend-multiply bg-repeat",
        className,
      )}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${size}px`,
        opacity,
      }}
    />
  );
}
