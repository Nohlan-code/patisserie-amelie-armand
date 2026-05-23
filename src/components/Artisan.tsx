export function Artisan() {
  return (
    <section
      id="artisan"
      className="relative border-b border-border/60 bg-secondary/40 py-16 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:gap-16 sm:px-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="gold-divider" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              L&apos;artisan
            </span>
          </div>
          <h2 className="font-serif text-[2.1rem] leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
            Amélie Armand,
            <br />
            <em
              className="not-italic italic"
              style={{ color: "var(--gold)" }}
            >
              passion sans concession.
            </em>
          </h2>
        </div>

        <div className="md:col-span-7 md:pt-3">
          <div className="space-y-5 text-[16px] leading-[1.75] text-foreground/85">
            <p>
              Une boutique à Lyon 9ème, une vitrine, un laboratoire derrière le
              comptoir. Les pâtisseries, les chocolats, les viennoiseries — tout
              se prépare ici, du tempérage à la cuisson.
            </p>
            <p>
              Les chocolats portent le nom de leur origine — Valencia,
              Montezuma, Cœur de Soie. Les pralinés sont travaillés maison à la
              pistache, à la noisette, à la cacahuète. Pas de raccourci.
            </p>
            <p className="text-muted-foreground">
              Le reste, c&apos;est la rigueur des gestes, la patience des
              cuissons, et l&apos;envie de bien faire — répétée chaque matin.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border/60 pt-6 sm:mt-10 sm:gap-6 sm:pt-8">
            <Stat value="100 %" label="Fait maison" />
            <Stat value="Origine" label="Chocolats" />
            <Stat value="Lyon 9" label="Boutique & atelier" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-left">
      <div className="font-serif text-xl leading-tight text-foreground sm:text-2xl md:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px] sm:tracking-[0.22em]">
        {label}
      </div>
    </div>
  );
}
