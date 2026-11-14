"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  tick: boolean;
};

const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Active members", tick: true },
  { value: 100, suffix: "+", label: "Events hosted", tick: true },
  { value: 2018, suffix: "", label: "Established", tick: false },
];

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

function TickingNumber({ stat, run }: { stat: Stat; run: boolean }) {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(!stat.tick || reduced || !run ? stat.value : 0);

  useEffect(() => {
    if (!stat.tick || !run || reduced) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * stat.value));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, stat.tick, stat.value, reduced]);

  return (
    <span>
      {n.toLocaleString("en-US")}
      {stat.suffix}
    </span>
  );
}

/**
 * The hall counter: the black board beside the main stage.
 * Numbers visibly tick to their value when the board first enters view.
 */
export function CounterBoard({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={cn("bg-ink text-cream flex flex-col justify-center gap-7 p-8 md:p-10", className)}
    >
      <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brass border-b border-cream/15 pb-3">
        Hall counter
      </p>
      {STATS.map((s) => (
        <div key={s.label}>
          <p className="display-caps text-5xl md:text-6xl text-cream tabular-nums">
            <TickingNumber stat={s} run={inView} />
          </p>
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/50 mt-2">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
