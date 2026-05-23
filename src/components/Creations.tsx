type Categorie = {
  nom: string;
  description: string;
  exemples: string[];
};

const CATEGORIES: Categorie[] = [
  {
    nom: "Pâtisseries",
    description:
      "Classiques revisités, créations de saison. Une cuisson maîtrisée, une texture précise, le goût pour seul juge.",
    exemples: ["Tarte aux fraises", "Paris-Brest", "Mille-feuille", "Pavlova"],
  },
  {
    nom: "Chocolats",
    description:
      "Bonbons, tablettes, sujets. Chocolats d'origine — Valencia, Montezuma, Cœur de Soie — pralinés maison à la pistache, à la noisette, à la cacahuète.",
    exemples: ["Ganaches", "Pralinés maison", "Tablettes d'origine"],
  },
  {
    nom: "Viennoiseries",
    description:
      "Tourage à la main, cuisson du matin. Le geste classique, fait sérieusement, pour démarrer la journée.",
    exemples: ["Croissant", "Pain au chocolat", "Brioche", "Kouign-amann"],
  },
  {
    nom: "Pause salée",
    description:
      "Pour déjeuner sur le pouce sans renier l'exigence. Quiches du jour, feuilletés, sandwichs préparés en boutique.",
    exemples: ["Quiches du jour", "Feuilletés", "Sandwichs"],
  },
];

export function Creations() {
  return (
    <section
      id="creations"
      className="relative border-b border-border/60 bg-background py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="gold-divider" />
            <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              La maison
            </span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            Quatre univers, une exigence
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {CATEGORIES.map((cat, idx) => (
            <article
              key={cat.nom}
              className="group relative border border-border/60 bg-card p-8 transition hover:border-gold/60 md:p-10"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <span className="font-serif text-[11px] uppercase tracking-[0.32em] text-gold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-12 bg-gold/40" />
              </div>
              <h3 className="mb-4 font-serif text-3xl text-foreground">
                {cat.nom}
              </h3>
              <p className="mb-6 text-[15px] leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {cat.exemples.map((ex) => (
                  <li
                    key={ex}
                    className="border border-border/80 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-foreground/70"
                  >
                    {ex}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
