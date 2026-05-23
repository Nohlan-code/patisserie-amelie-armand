function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-noir py-16 text-cream sm:py-24"
      style={{ color: "#f8f4ed" }}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-10 text-center sm:mb-12">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="inline-block h-px w-12"
              style={{ background: "var(--gold)" }}
            />
            <span className="text-[11px] uppercase tracking-[0.32em] text-cream/60">
              Nous rendre visite
            </span>
            <span
              className="inline-block h-px w-12"
              style={{ background: "var(--gold)" }}
            />
          </div>
          <h2 className="font-serif text-[2.1rem] leading-tight sm:text-4xl md:text-5xl">
            Passez à la boutique
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            Ouverture officielle le 13 mai. Pour les commandes spéciales,
            réservation par message Instagram en attendant la mise en ligne
            complète.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-cols-3">
          <div>
            <div
              className="mb-3 text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--gold-soft)" }}
            >
              Adresse
            </div>
            <p className="font-serif text-xl text-cream">
              Lyon 9ème
              <br />
              <span className="text-cream/50 text-base">
                (adresse précise à venir)
              </span>
            </p>
          </div>
          <div>
            <div
              className="mb-3 text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--gold-soft)" }}
            >
              Horaires
            </div>
            <p className="font-serif text-xl text-cream">
              Ouverture le 13 mai
              <br />
              <span className="text-cream/50 text-base">
                (horaires à confirmer)
              </span>
            </p>
          </div>
          <div>
            <div
              className="mb-3 text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "var(--gold-soft)" }}
            >
              Suivez-nous
            </div>
            <a
              href="https://www.instagram.com/patisserie_ameliearmand/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 font-serif text-xl text-cream transition hover:opacity-80"
            >
              <InstagramIcon className="h-5 w-5" />
              @patisserie_ameliearmand
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
