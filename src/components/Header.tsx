"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "Maison", href: "#maison" },
  { label: "Créations", href: "#creations" },
  { label: "L'Artisan", href: "#artisan" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open + close on resize to desktop
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="#maison"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo size={40} />
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base text-foreground sm:text-lg">
              Amélie Armand
            </span>
            <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
              Pâtisserie · Lyon 9ème
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.18em] text-foreground/70 transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-foreground/15 px-5 py-2 text-[12px] uppercase tracking-[0.18em] text-foreground transition hover:border-foreground/40 hover:bg-foreground hover:text-background md:inline-flex"
        >
          Commander
        </Link>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground md:hidden"
        >
          <BurgerIcon open={open} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[60px] z-30 bg-noir/40 backdrop-blur-sm transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`fixed inset-x-0 top-[60px] z-30 border-b border-border/60 bg-background shadow-2xl transition-transform duration-200 ease-out ${
            open ? "translate-y-0" : "-translate-y-4 opacity-0"
          }`}
          style={{ opacity: open ? 1 : 0 }}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center border-b border-border/60 px-2 font-serif text-xl text-foreground/85 transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex min-h-[48px] items-center justify-center rounded-full bg-foreground px-6 text-[12px] uppercase tracking-[0.22em] text-background"
            >
              Commander
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <line
        x1="3"
        y1="6"
        x2="19"
        y2="6"
        style={{
          transition: "transform 200ms ease",
          transformOrigin: "center",
          transform: open ? "rotate(45deg) translate(0,5px)" : "none",
        }}
      />
      <line
        x1="3"
        y1="11"
        x2="19"
        y2="11"
        style={{
          transition: "opacity 200ms ease",
          opacity: open ? 0 : 1,
        }}
      />
      <line
        x1="3"
        y1="16"
        x2="19"
        y2="16"
        style={{
          transition: "transform 200ms ease",
          transformOrigin: "center",
          transform: open ? "rotate(-45deg) translate(0,-5px)" : "none",
        }}
      />
    </svg>
  );
}
