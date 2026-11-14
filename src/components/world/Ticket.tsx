import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Ticket-stub action in the hall's vocabulary.
 * `notch` is the color of the surface the ticket sits on — it shows through the punched notches.
 */
export function Ticket({
  href,
  children,
  tone = "stamp",
  notch = "var(--hall)",
  className,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "stamp" | "ink" | "outline" | "cream";
  notch?: string;
  className?: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ ["--notch" as string]: notch }}
      className={cn(
        "stub inline-flex touch-target items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-bold uppercase tracking-[0.08em] transition-transform active:translate-y-px",
        tone === "stamp" && "bg-stamp text-white hover:brightness-110",
        tone === "ink" && "bg-ink text-cream hover:bg-ink/90",
        tone === "cream" && "bg-cream text-ink hover:bg-cream/90",
        tone === "outline" &&
          "border-2 border-cream/70 text-cream hover:bg-cream/10",
        className
      )}
    >
      {children}
    </Link>
  );
}
