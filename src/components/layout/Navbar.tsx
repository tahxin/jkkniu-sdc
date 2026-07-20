"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const R = "#C8001E";   // red
const Y = "#F5A800";   // amber-gold
const BK = "#0D0D0D";  // near-black

const NAV_LINKS = [
  { name: "About",      href: "/about" },
  { name: "Committee",  href: "/committee" },
  { name: "Events",     href: "/events" },
  { name: "Partners",   href: "/partners" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery",    href: "/gallery" },
  { name: "Blog",       href: "/blog" },
  { name: "Contact",    href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-200",
      scrolled ? "bg-white/96 backdrop-blur-sm border-b border-[#E8E8E8] shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-5 md:px-8">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          {/* Red square badge with yellow dot accent */}
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white font-black text-[10px] tracking-widest relative"
            style={{ backgroundColor: R }}
          >
            SDC
            <span
              className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-white"
              style={{ backgroundColor: Y }}
            />
          </span>
          <span className="font-bold text-[15px] tracking-tight" style={{ color: BK }}>
            JKKNIU<span style={{ color: R }}>-SDC</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <li key={l.name}>
              <Link
                href={l.href}
                className="px-3 py-2 text-[13px] font-medium text-[#6B6B6B] hover:text-[#0D0D0D] rounded-md hover:bg-[#F7F7F5] transition-colors"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/login" className="text-[13px] font-medium text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors">
            Sign in
          </Link>
          <Button
            className="h-9 px-4 rounded-lg text-white text-[13px] font-semibold shadow-none transition-colors"
            style={{ backgroundColor: R }}
            render={<Link href="/membership" />}
          >
            Join Now
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="flex lg:hidden h-9 w-9 rounded-lg hover:bg-[#F7F7F5]"
              />
            }
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:w-80 p-0 border-l border-[#E8E8E8] bg-white">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col h-full">

              {/* Drawer header — black bar with red/yellow logo */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8E8E8]" style={{ backgroundColor: BK }}>
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white font-black text-[10px] relative"
                    style={{ backgroundColor: R }}
                  >
                    SDC
                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-white" style={{ backgroundColor: Y }} />
                  </span>
                  <span className="font-bold text-[15px] text-white">JKKNIU-SDC</span>
                </Link>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-3 px-3">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#F7F7F5] transition-colors touch-target"
                  >
                    {l.name}
                    <ArrowRight className="h-4 w-4 opacity-30" />
                  </Link>
                ))}
              </div>

              {/* CTA footer */}
              <div className="p-4 border-t border-[#E8E8E8]">
                <Button
                  className="w-full h-11 rounded-xl text-white font-semibold"
                  style={{ backgroundColor: R }}
                  render={<Link href="/membership" onClick={() => setOpen(false)} />}
                >
                  Join JKKNIU-SDC
                </Button>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center text-[13px] text-[#6B6B6B] hover:text-[#0D0D0D] py-3 mt-1 touch-target transition-colors"
                >
                  Sign in to your account
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
