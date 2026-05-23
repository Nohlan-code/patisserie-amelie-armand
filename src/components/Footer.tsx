import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <div className="font-serif text-base text-foreground">
              Pâtisserie Amélie Armand
            </div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Artisan pâtissier · Chocolatier · Lyon 9ème
            </div>
          </div>
        </div>
        <p className="text-[12px] text-muted-foreground">
          © {new Date().getFullYear()} Amélie Armand. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
