import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "Maison", href: "#maison" },
  { label: "Créations", href: "#creations" },
  { label: "L'Artisan", href: "#artisan" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#maison" className="flex items-center gap-3">
          <Logo size={44} />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-lg text-foreground">
              Amélie Armand
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Pâtisserie · Chocolats
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
      </div>
    </header>
  );
}
