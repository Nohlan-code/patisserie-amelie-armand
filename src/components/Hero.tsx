"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

// NOTE TO SELF (Nohlan) : ces images sont des placeholders Unsplash, libres de droits.
// À remplacer par les photos haute déf des créations d'Amélie Armand quand fournies.
const items: CardStackItem[] = [
  {
    id: 1,
    title: "Tarte aux fraises",
    description: "Sablé breton, crème vanille de Madagascar, fraises de saison",
    imageSrc:
      "https://images.unsplash.com/photo-1551404973-761c83cd8339?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Paris-Brest pistache",
    description: "Pâte à choux croustillante, praliné maison aux pistaches",
    imageSrc:
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Chocolats d'exception",
    description: "Bonbons et tablettes, sourcing direct chez les planteurs",
    imageSrc:
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Éclairs & mignardises",
    description: "L'art de la bouchée, à partager ou à savourer seul",
    imageSrc:
      "https://images.unsplash.com/photo-1620980776848-84cc20de7820?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Pavlova de saison",
    description: "Meringue craquante, crème montée, fruits frais cueillis",
    imageSrc:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Croissants & viennoiseries",
    description: "Beurre AOP Charentes-Poitou, levain naturel, plié à la main",
    imageSrc:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=85&auto=format&fit=crop",
  },
];

export function Hero() {
  return (
    <section
      id="maison"
      className="relative overflow-hidden border-b border-border/60"
    >
      {/* subtle texture wash */}
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
            Ouverture officielle · 13 mai
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
          main, ici, avec la précision et le respect des bons produits.
        </p>
      </div>

      {/* Card stack */}
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
