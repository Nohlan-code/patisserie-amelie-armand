"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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

type StackSize = {
  width: number;
  height: number;
  spreadDeg: number;
  overlap: number;
};

function getStackSize(viewportWidth: number): StackSize {
  if (viewportWidth < 420) {
    return { width: 240, height: 180, spreadDeg: 30, overlap: 0.55 };
  }
  if (viewportWidth < 640) {
    return { width: 300, height: 220, spreadDeg: 36, overlap: 0.52 };
  }
  if (viewportWidth < 1024) {
    return { width: 400, height: 270, spreadDeg: 42, overlap: 0.5 };
  }
  return { width: 460, height: 300, spreadDeg: 48, overlap: 0.48 };
}

export function Hero() {
  // Default to mobile sizing during SSR — hydrated to real viewport client-side
  const [size, setSize] = useState<StackSize>(() => getStackSize(390));

  useEffect(() => {
    const update = () => setSize(getStackSize(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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

      <div className="relative mx-auto max-w-6xl px-5 pt-12 pb-6 text-center sm:px-6 sm:pt-16 sm:pb-8 md:pt-24">
        <div className="mb-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:mb-6">
          <span className="hidden gold-divider sm:inline-block" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:text-[11px] sm:tracking-[0.32em]">
            Ouverture · 13 mai · Lyon 9ème
          </span>
          <span className="hidden gold-divider sm:inline-block" />
        </div>

        <h1 className="text-balance font-serif text-[2.4rem] leading-[1.05] text-foreground sm:text-5xl md:text-7xl">
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

        <p className="mx-auto mt-5 max-w-2xl text-balance text-[15px] text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
          Pâtisseries, chocolats, viennoiseries et pause salée — créés à la
          main, dans notre laboratoire à Lyon 9ème.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-2 pb-14 sm:px-4 sm:pb-20">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={3500}
          pauseOnHover
          showDots
          cardWidth={size.width}
          cardHeight={size.height}
          spreadDeg={size.spreadDeg}
          overlap={size.overlap}
          renderCard={(item) => <OptimizedCard item={item} />}
        />
      </div>
    </section>
  );
}

function OptimizedCard({ item }: { item: CardStackItem }) {
  // Premier item = au-dessus du pli → priority. Autres = lazy.
  const isFirst = item.id === 1;
  return (
    <div className="relative h-full w-full">
      <Image
        src={item.imageSrc ?? ""}
        alt={item.title}
        fill
        sizes="(max-width: 420px) 240px, (max-width: 640px) 300px, (max-width: 1024px) 400px, 460px"
        priority={isFirst}
        loading={isFirst ? undefined : "lazy"}
        quality={80}
        draggable={false}
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <div className="truncate text-lg font-semibold text-white">
          {item.title}
        </div>
        {item.description ? (
          <div className="mt-1 line-clamp-2 text-sm text-white/80">
            {item.description}
          </div>
        ) : null}
      </div>
    </div>
  );
}
