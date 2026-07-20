"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/30 pt-16 pb-12">
      <div className="flex flex-col items-center w-full">
        {/* Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-border w-full max-w-md mx-4">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6 gap-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm tracking-tight leading-none">
                  SDC
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-tight text-foreground">
                  JKKNIU-SDC
                </span>
                <span className="text-xs text-muted-foreground leading-tight">
                  Software Development Club
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mt-2">
              <h1 className="text-2xl font-bold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Sign in to your JKKNIU-SDC account
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border mb-6" />

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-5"
          >
            {/* Email Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-foreground"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="border border-input rounded-xl h-12 px-4 w-full text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/60"
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-foreground"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="border border-input rounded-xl h-12 px-4 pr-12 w-full text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {/* Forgot password */}
              <div className="flex justify-end mt-0.5">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full h-12 bg-primary text-white rounded-2xl font-semibold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all mt-1 shadow-sm shadow-primary/20"
            >
              Sign in
            </button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 border-t border-border" />
            <span className="text-xs text-muted-foreground font-medium px-1">
              or
            </span>
            <div className="flex-1 border-t border-border" />
          </div>

          {/* Register prompt */}
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              href="/membership"
              className="text-primary font-semibold hover:underline"
            >
              Apply for membership
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <Link
          href="/"
          className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
