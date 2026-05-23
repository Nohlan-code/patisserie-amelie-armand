"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Tarte aux fraises",
    description: "Fraises de saison, crème montée, sablé doré",
    imageSrc: "/creations/tarte-fraises.webp",
  },
  {
    id: 2,
    title: "Paris-Brest pistache",
    description: "Pâte à choux croustillante, praliné maison aux pistaches",
    imageSrc: "/creations/paris-brest-pistache.webp",
  },
  {
    id: 3,
    title: "Chocolats d'origine",
    description: "Valencia, Montezuma, Cœur de Soie — ganaches & pralinés maison",
    imageSrc: "/creations/vitrine-chocolats.webp",
  },
  {
    id: 4,
    title: "Tartelettes & entremets",
    description: "Tartelettes fraises, entremets chocolat — fraîcheur du jour",
    imageSrc: "/creations/tartelettes-entremets.jpg",
  },
  {
    id: 5,
    title: "Ouverture officielle · 13 mai",
    description: "Pavlova de bienvenue, à découvrir en boutique",
    imageSrc: "/creations/pavlova-ouverture.webp",
  },
  {
    id: 6,
    title: "À emporter",
    description: "Boîte signature Amélie Armand — Lyon 9ème",
    imageSrc: "/creations/packaging-aa.webp",
  },
];

export function Hero() {
  return (
    <section
      id="maison"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #b89a5b 0%, transparent 50%), radial-gradient(circle at 80% 60%, #b89a5b 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-8 text-center md:pt-24">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="gold-divider" />
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
            Ouverture officielle · 13 mai · Lyon 9ème
          </span>
          <span className="gold-divider" />
        </div>

        <h1 className="text-balance font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
          L&apos;artisanat pâtissier,
          <br />
          <em
            className="not-italic"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "var(--gold)",
            }}
          >
            sans détour.
          </em>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground md:text-lg">
          Pâtisseries, chocolats, viennoiseries et pause salée — créés à la
          main, dans notre laboratoire à Lyon 9ème.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 pb-20">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={3500}
          pauseOnHover
          showDots
          cardWidth={460}
          cardHeight={300}
        />
      </div>
    </section>
  );
}
