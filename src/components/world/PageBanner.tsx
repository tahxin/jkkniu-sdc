import { cn } from "@/lib/utils";

/**
 * Full-bleed page banner in the hall's vocabulary: a solid ink or hall-green
 * signage band carrying the page title in billboard display type.
 */
export function PageBanner({
  title,
  intro,
  tone = "ink",
  actions,
  className,
}: {
  title: string;
  intro?: string;
  tone?: "ink" | "hall";
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "border-b-[3px] border-ink text-cream",
        tone === "ink" ? "bg-ink" : "bg-hall",
        className
      )}
      style={
        tone === "hall"
          ? {
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(244,239,227,0.045) 0 2px, transparent 2px 110px)",
            }
          : undefined
      }
    >
      <div className="container mx-auto max-w-6xl px-5 md:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
        <h1 className="display-caps text-[clamp(2.8rem,7vw,5rem)]">{title}</h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-[1.75] text-cream/70">
            {intro}
          </p>
        )}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  );
}
