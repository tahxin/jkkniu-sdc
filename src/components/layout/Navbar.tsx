"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const R = "#C8001E";   // red
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
  const pathname = usePathname();

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = pathname === "/";
  const useLightText = isHome && !scrolled;
  const useSolidBg = !isHome || scrolled;

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-200",
      useSolidBg ? "bg-white/96 backdrop-blur-sm border-b border-[#E8E8E8] shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto max-w-5xl flex h-16 items-center justify-between px-5 md:px-8">

        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="flex items-center justify-center h-9 w-9 bg-white p-1 rounded-md shadow-sm border border-[#E8E8E8]">
            <img src="/jkkniu-sdc transparent logo.png" alt="JKKNIU-SDC Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-[15px] tracking-tight transition-colors" style={{ color: useLightText ? "white" : BK }}>
            JKKNIU<span style={{ color: R }}>-SDC</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((l) => (
            <li key={l.name}>
              <Link
                href={l.href}
                className={cn(
                  "px-3 py-2 text-[13px] font-medium rounded-md transition-colors",
                  !useLightText 
                    ? "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#F7F7F5]" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                )}
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/login" className={cn(
            "text-[13px] font-medium transition-colors",
            !useLightText ? "text-[#6B6B6B] hover:text-[#0D0D0D]" : "text-white/70 hover:text-white"
          )}>
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
                className={cn(
                  "flex lg:hidden h-9 w-9 rounded-lg transition-colors",
                  !useLightText 
                    ? "hover:bg-[#F7F7F5] text-[#0D0D0D]" 
                    : "hover:bg-white/10 text-white"
                )}
              />
            }
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </SheetTrigger>

          <SheetContent side="right" className="w-full sm:w-80 p-0 border-l border-[#E8E8E8] bg-white">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex flex-col h-full">

              {/* Drawer header — black bar with logo */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8E8E8]" style={{ backgroundColor: BK }}>
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center h-8 w-8 bg-white p-1 rounded-md shadow-sm">
                    <img src="/jkkniu-sdc transparent logo.png" alt="JKKNIU-SDC Logo" className="w-full h-full object-contain" />
                  </div>
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
